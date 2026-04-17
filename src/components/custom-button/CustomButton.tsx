import React, { useMemo } from 'react';
import { ActivityIndicator, Pressable, View } from 'react-native';

import { CustomButtonProps } from './customButton.types';
import { colors } from '../../constants/colors';
import { styles } from './customButton.styles';
import CustomText from '../custom-text/CustomText';

function rippleColorForBackground(hex: string): string {
  const normalized = hex.replaceAll(/\s/g, '').toLowerCase();
  const isLight =
    normalized === '#fff' ||
    normalized === '#ffffff' ||
    normalized.startsWith('rgb(255') ||
    normalized.startsWith('rgba(255');
  return isLight ? colors.blackTenPercent : colors.whiteTwentyPercent;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  fontSize,
  buttonStyle,
  backgroundColor = colors.white,
  leftIcon,
  rightIcon,
  textColor = colors.black,
  light = false,
  regular = false,
  medium = true,
  semiBold = false,
  bold = false,
  loading = false,
  ...restProps
}) => {
  const androidRipple = useMemo(
    () =>
      disabled || loading
        ? undefined
        : {
            color: rippleColorForBackground(backgroundColor),
            foreground: true,
          },
    [backgroundColor, disabled, loading],
  );

  const titleStyles = useMemo(
    () => [styles.label, typeof fontSize === 'number' ? { fontSize } : null],
    [fontSize],
  );

  return (
    <Pressable
      accessibilityRole="button"
      {...restProps}
      android_ripple={androidRipple}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        buttonStyle,
        { backgroundColor },
        pressed && !disabled && !loading && styles.pressed,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {!loading && leftIcon}
      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator size="large" color={textColor} />
        </View>
      ) : (
        <CustomText
          color={textColor}
          light={light}
          regular={regular}
          medium={medium}
          semiBold={semiBold}
          bold={bold}
          style={titleStyles}
        >
          {title}
        </CustomText>
      )}
      {!loading && rightIcon}
    </Pressable>
  );
};

export default CustomButton;
