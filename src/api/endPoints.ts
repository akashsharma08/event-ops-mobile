/**
 * Paths are relative to axios `baseURL` (`API_BASE_URL` from `.env`).
 * Change `API_PREFIX` to match your gateway (e.g. `/api`, `/api/v2`).
 */
export const API_PREFIX = '/api/v1';

export const routes = {
  auth: `${API_PREFIX}/auth`,
  events: `${API_PREFIX}/events`,
};

export const API_ENDPOINTS = {
  REFRESH_TOKEN: `${routes.auth}/refresh`,

  LOGIN_EMAIL: `${routes.auth}/login/email`,
  LOGIN_PHONE_REQUEST_OTP: `${routes.auth}/login/phone/otp/request`,
  LOGIN_PHONE_VERIFY_OTP: `${routes.auth}/login/phone/otp/verify`,

  REGISTER_EMAIL: `${routes.auth}/register/email`,
  REGISTER_PHONE_REQUEST_OTP: `${routes.auth}/register/phone/otp/request`,
  REGISTER_VERIFY_OTP: `${routes.auth}/register/otp/verify`,

  FORGOT_PASSWORD_REQUEST: `${routes.auth}/forgot-password/request`,
  FORGOT_PASSWORD_VERIFY_OTP: `${routes.auth}/forgot-password/verify-otp`,
  FORGOT_PASSWORD_RESET: `${routes.auth}/forgot-password/reset`,

  EVENTS_LIST: routes.events,
  EVENT_DETAIL: (eventId: string) => `${routes.events}/${eventId}`,
} as const;
