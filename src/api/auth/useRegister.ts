/**
 * API hooks pattern for this app:
 * - Plain async function performs `axiosInstance` + `API_ENDPOINTS` call and returns typed data.
 * - `useMutation` / `useQuery` wrapper accepts optional `config` and composes `onSuccess` / `onError`
 *   with the caller’s handlers (see destructuring of `config`).
 * - Side effects (navigation, user feedback) live in the hook defaults; override or extend via `config`.
 */
import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Alert } from 'react-native';

import axiosInstance from '../axiosInterceptor';
import { API_ENDPOINTS } from '../endPoints';
import { navigationRef } from '../../navigation/NavigationService';

type EmailRegisterPayload = {
  fullName: string;
  email: string;
  password: string;
  mobileNumber?: never;
  countryName?: never;
  countryCode?: never;
  termsAccepted: boolean;
};

type MobileOtpResponse = {
  message: string;
  maskedMobile: string;
  maskedEmail?: string;
  expiresInSeconds: number;
};

type EmailOtpResponse = {
  message: string;
  maskedEmail: string;
  maskedMobile?: string;
  expiresInSeconds: number;
};

type PhoneRegisterPayload = {
  fullName: string;
  mobileNumber: string;
  countryCode: string;
  countryName: string;
  email?: never;
  password?: string;
  termsAccepted: boolean;
};

export type RegisterPayload = EmailRegisterPayload | PhoneRegisterPayload;

export interface RegisterApiResponse {
  ctxId: string;
  success: boolean;
  message: string;
  source: string;
  data: MobileOtpResponse | EmailOtpResponse;
  error: string | null;
}

type RegisterMutationConfig = UseMutationOptions<
  RegisterApiResponse,
  AxiosError<{ message?: string }>,
  RegisterPayload,
  unknown
>;

type UseRegisterMutationOptions = {
  config?: RegisterMutationConfig;
};

export const registerAccount = async (
  data: RegisterPayload,
): Promise<RegisterApiResponse> => {
  const body =
    'email' in data && data.email
      ? {
          fullName: data.fullName.trim(),
          email: data.email.trim().toLowerCase(),
          password: data.password,
          termsAccepted: data.termsAccepted,
        }
      : {
          fullName: data.fullName.trim(),
          mobileNumber: data.mobileNumber,
          countryCode: data.countryCode,
          countryName: data.countryName,
          ...(data.password ? { password: data.password } : {}),
          termsAccepted: data.termsAccepted,
        };

  const url =
    'email' in data && data.email
      ? API_ENDPOINTS.REGISTER_EMAIL
      : API_ENDPOINTS.REGISTER_PHONE_REQUEST_OTP;

  const response = await axiosInstance.post<RegisterApiResponse>(url, body);
  return response.data;
};

export const useRegister = ({ config }: UseRegisterMutationOptions = {}) => {
  const { onSuccess: userOnSuccess, onError: userOnError, ...restConfig } =
    config ?? {};

  return useMutation({
    ...restConfig,
    mutationFn: registerAccount,
    onSuccess: (response, variables, onMutateResult, context) => {
      const maskedEmail = response.data.maskedEmail;
      const maskedMobile = response.data.maskedMobile;
      const expiresInSeconds = response.data.expiresInSeconds;

      if (navigationRef.isReady()) {
        navigationRef.navigate('OtpVerify', {
          flow: 'register',
          email:
            variables.email?.trim().toLowerCase() ??
            `${variables.countryCode} ${variables.mobileNumber}`.trim(),
          maskedEmail,
          maskedMobile,
          expiresInSeconds,
          mobileNumber: variables.mobileNumber,
          countryCode: variables.countryCode,
          countryName: variables.countryName,
        });
      }

      const message = response.message || 'Something went wrong';
      Alert.alert('Success', message);
      userOnSuccess?.(response, variables, onMutateResult, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      const message =
        error.response?.data?.message ?? error.message ?? 'Something went wrong';
      Alert.alert('Error', message);
      userOnError?.(error, variables, onMutateResult, context);
    },
  });
};
