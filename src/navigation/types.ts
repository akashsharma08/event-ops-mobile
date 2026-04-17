export type AuthStackParamList = {
  AppStart: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OtpVerify:
    | {
        flow?: 'register' | 'login' | 'forgot';
        email?: string;
        maskedEmail?: string;
        maskedMobile?: string;
        expiresInSeconds?: number;
        mobileNumber?: string;
        countryCode?: string;
        countryName?: string;
      }
    | undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Details: { title?: string } | undefined;
};
