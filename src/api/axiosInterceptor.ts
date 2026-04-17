import { API_BASE_URL } from '@env';
import axios, {
  type AxiosError,
  AxiosHeaders,
  type InternalAxiosRequestConfig,
} from 'axios';
import { Alert } from 'react-native';
import { clearTokens, getTokens, saveTokens } from '../config/tokensStorage';
import { API_ENDPOINTS } from './endPoints';
import { store } from '../store';
import { signOut } from '../store/slices/authSlice';

const normalizedBase = API_BASE_URL?.replace(/\/+$/, '');

/** Plain `axios` has no `baseURL`; use this for refresh to avoid a circular instance call. */
function toAbsoluteApiUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${p}`;
}

const axiosInstance = axios.create({
  baseURL: normalizedBase,
  timeout: 20_000,
});

function isAuthRefreshRequest(config: InternalAxiosRequestConfig): boolean {
  const url = `${config.baseURL ?? ''}${config.url ?? ''}`;
  return url.includes('/refresh') || config.url?.includes('/refresh') === true;
}

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { accessToken } = await getTokens();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneOffset = new Date().getTimezoneOffset();
    const headers = AxiosHeaders.from(config.headers ?? {});
    headers.set('Authorization', accessToken ? `Bearer ${accessToken}` : '');
    headers.set('timezone', timezone);
    headers.set('offset', String(timezoneOffset));
    config.headers = headers;
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

type RefreshQueueItem = {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
};

let isRefreshing = false;
let failedQueue: RefreshQueueItem[] = [];

function processQueue(error: unknown, token: string | null = null) {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
}

/** Supports `{ data: { access_token, refresh_token } }` or flat snake/camel case. */
function extractRefreshedTokens(data: unknown): {
  access: string;
  refresh: string;
} | null {
  if (data == null || typeof data !== 'object') {
    return null;
  }
  const root = data as Record<string, unknown>;
  const inner = (root.data ?? root) as Record<string, unknown>;
  const access =
    (typeof inner.access_token === 'string' && inner.access_token) ||
    (typeof inner.accessToken === 'string' && inner.accessToken) ||
    null;
  const refresh =
    (typeof inner.refresh_token === 'string' && inner.refresh_token) ||
    (typeof inner.refreshToken === 'string' && inner.refreshToken) ||
    null;
  if (access && refresh) {
    return { access, refresh };
  }
  return null;
}

axiosInstance.interceptors.response.use(
  response => response,
  async (error: unknown) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!originalRequest) {
      return Promise.reject(error);
    }

    const { refreshToken } = await getTokens();
    const status = axiosError.response?.status;
    const shouldTryRefresh =
      status === 401 &&
      Boolean(refreshToken) &&
      !originalRequest._retry &&
      !isAuthRefreshRequest(originalRequest);

    if (shouldTryRefresh) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            const headers = AxiosHeaders.from(originalRequest.headers ?? {});
            headers.set('Authorization', `Bearer ${token as string}`);
            originalRequest.headers = headers;
            return axiosInstance(originalRequest);
          })
          .catch(err => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          toAbsoluteApiUrl(API_ENDPOINTS.REFRESH_TOKEN),
          {
            refreshToken,
          },
        );
        const tokens = extractRefreshedTokens(response.data);
        if (!tokens) {
          throw new Error('Refresh response missing tokens');
        }
        await saveTokens(tokens.access, tokens.refresh);
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${tokens.access}`;
        processQueue(null, tokens.access);

        const headers = AxiosHeaders.from(originalRequest.headers ?? {});
        headers.set('Authorization', `Bearer ${tokens.access}`);
        originalRequest.headers = headers;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        Alert.alert('Session expired', 'Please sign in again.');
        await clearTokens();
        store.dispatch(signOut());
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
