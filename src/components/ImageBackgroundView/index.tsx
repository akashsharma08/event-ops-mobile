import React from 'react';
import {
  ImageBackground,
  type ImageBackgroundProps,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import images from '../../constants/images';
import { styles } from './styles';
import { hpx } from '../../utils/metric';

export type ImageBackgroundViewProps = ImageBackgroundProps & {
  /** Applied to the inner wrapper around `children` (layout, padding, flex). */
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export function ImageBackgroundView({
  children,
  style,
  imageStyle,
  contentContainerStyle,
  resizeMode = 'cover',
  ...rest
}: Readonly<ImageBackgroundViewProps>) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      source={images.app_background}
      style={[styles.root, style]}
      imageStyle={imageStyle}
      resizeMode={resizeMode}
      {...rest}
    >
      <View
        style={[
          styles.content,
          contentContainerStyle,
          { paddingTop: top, paddingBottom: bottom ? bottom + hpx(16) : 0 },
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
}
