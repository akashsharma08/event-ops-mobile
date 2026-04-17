import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type InputType = 'name' | 'email' | 'phone' | 'password' | 'text' | 'contact';

/* ---------------------------------- */
/* Base (common props) */
/* ---------------------------------- */

type CommonProps = TextInputProps & {
  error?: string;
  inputType: InputType;
  value?: string;
  verifyLoader?: boolean;
  placeholder?: string;
  showPasswordValidation?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  keyboardType?: string;
  style?: StyleProp<ViewStyle>;
  leftIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  rightIcon?: React.ReactNode;
  rightIconStyle?: StyleProp<ViewStyle>;
  onPressRightIcon?: () => void;
  leftIconStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  textAlign?: 'left' | 'right' | 'center';
  label?: string;
  mandatory?: boolean;
  showError?: boolean;
  light?: boolean;
};

/* ---------------------------------- */
/* Verification Logic */
/* ---------------------------------- */

type WithVerification = {
  doVerify: true;
  onVerify: () => void;
  verified: boolean;
};

type WithoutVerification = {
  doVerify?: false;
  onVerify?: never;
  verified?: never;
};

type VerificationProps = WithVerification | WithoutVerification;

/* ---------------------------------- */
/* Phone Specific */
/* ---------------------------------- */

type PhoneInputProps = {
  isPhoneNumber: true;
  countryCode: string;
  setCountryCode: (code: string) => void;
  countryName: string;
  setCountryName: (name: string) => void;
};

type NormalInputProps = {
  isPhoneNumber?: false;
  countryCode?: never;
  setCountryCode?: never;
  countryName?: never;
  setCountryName?: never;
};

/* ---------------------------------- */
/* Final Type */
/* ---------------------------------- */

export type CustomTextInputProps = CommonProps & VerificationProps & (PhoneInputProps | NormalInputProps);
