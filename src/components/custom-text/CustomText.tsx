import React from 'react';
import { Platform, Text, TextProps, TextStyle } from 'react-native';
import { CustomTextProps } from './type';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { fontSizes, nf } from '../../utils/metric';

const CustomText = ({
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  h7 = false,
  h8 = false,
  h9 = false,
  h10 = false,
  h11 = false,
  h12 = false,
  h13 = false,
  h14 = false,
  h15 = false,
  h16 = false,
  h17 = false,
  h18 = false,
  h19 = false,
  fw200 = false,
  fw300 = false,
  fw400 = false,
  fw500 = false,
  fw600 = false,
  fw700 = false,
  center = false,
  light = false,
  regular = false,
  medium = false,
  semiBold = false,
  bold = false,
  color = colors.white,
  style,
  children,
  textAlign = 'left',
  ...restProps
}: CustomTextProps & TextProps) => {
  const fontSize = (): number => {
    switch (true) {
      case h1:
        return nf(fontSizes.h1);
      case h2:
        return nf(fontSizes.h2);
      case h3:
        return nf(fontSizes.h3);
      case h4:
        return nf(fontSizes.h4);
      case h5:
        return nf(fontSizes.h5);
      case h6:
        return nf(fontSizes.h6);
      case h7:
        return nf(fontSizes.h7);
      case h8:
        return nf(fontSizes.h8);
      case h9:
        return nf(fontSizes.h9);
      case h10:
        return nf(fontSizes.h10);
      case h11:
        return nf(fontSizes.h11);
      case h12:
        return nf(fontSizes.h12);
      case h13:
        return nf(fontSizes.h13);
      case h14:
        return nf(fontSizes.h14);
      case h15:
        return nf(fontSizes.h15);
      case h16:
        return nf(fontSizes.h16);
      case h17:
        return nf(fontSizes.h17);
      case h18:
        return nf(fontSizes.h18);
      case h19:
        return nf(fontSizes.h19);
      default:
        return nf(fontSizes.h15);
    }
  };

  const fontWeight = (): TextStyle['fontWeight'] => {
    if (Platform.OS === 'android') {
      if (fw200) return '200';
      if (fw300) return '300';
      if (fw400) return '400';
      if (fw500) return '500';
      if (fw600) return '600';
      if (fw700) return '700';
      return '500';
    }
  };

  const textColor = (): string => {
    return color;
  };

  const fontFamily = (): string => {
    if (light) return fonts.light;
    if (regular) return fonts.regular;
    if (medium) return fonts.medium;
    if (semiBold) return fonts.semiBold;
    if (bold) return fonts.bold;
    return fonts.medium;
  };

  const styleText = {
    fontSize: fontSize(),
    fontFamily: fontFamily(),
    ...(fontWeight() && {
      fontWeight: fontWeight(),
    }),
    color: textColor(),
    textAlign: center ? 'center' : textAlign,
  };
  return (
    <Text {...restProps} allowFontScaling={false} style={[styleText as TextStyle, style ?? {}]}>
      {children}
    </Text>
  );
};

export default CustomText;
