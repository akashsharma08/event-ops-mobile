import { Dimensions, PixelRatio } from 'react-native';

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const scaleWidth = (size: number) => {
  const { width } = Dimensions.get('window');
  return (size * width) / BASE_WIDTH;
};

const scaleHeight = (size: number) => {
  const { height } = Dimensions.get('window');
  return (size * height) / BASE_HEIGHT;
};

/** Normalized size from design width (375). */
export function wpx(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(scaleWidth(size)));
}

/** Normalized size from design height (812). */
export function hpx(size: number): number {
  return Math.round(PixelRatio.roundToNearestPixel(scaleHeight(size)));
}

/** Normalized font size for the current screen width. */
export function nf(size: number): number {
  return wpx(size);
}

export const fontSizes = {
  h1: 40,
  h2: 36,
  h3: 32,
  h4: 28,
  h5: 26,
  h6: 24,
  h7: 22,
  h8: 20,
  h9: 19,
  h10: 18,
  h11: 17,
  h12: 16,
  h13: 15,
  h14: 14,
  h15: 13,
  h16: 12,
  h17: 11,
  h18: 10,
  h19: 9,
};
