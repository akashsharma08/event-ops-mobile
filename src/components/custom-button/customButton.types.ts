import { GestureResponderEvent, ViewStyle } from 'react-native';

export interface CustomButtonProps {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  fontSize?: number;
  buttonStyle?: ViewStyle;
  backgroundColor?: string;
  textColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  light?: boolean;
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  loading?: boolean;
  loadingSize?: number;
}
