import { Platform, StyleSheet } from 'react-native';
import { fontSizes, hpx, nf, wpx } from '../../utils/metric';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  button: {
    height: hpx(56),
    backgroundColor: colors.white,
    borderRadius: hpx(100),
    alignItems: 'center',
    gap: wpx(8),
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: hpx(4) },
        shadowOpacity: 0.18,
        shadowRadius: hpx(10),
      },
      android: {
        elevation: 4,
      },
      default: {},
    }),
  },
  /** Tactile “press in” without muddying label contrast. */
  pressed: {
    transform: [{ scale: 0.985 }],
    ...Platform.select({
      ios: {
        shadowOpacity: 0.08,
        shadowRadius: hpx(6),
      },
      android: {
        elevation: 2,
      },
      default: {},
    }),
  },
  label: {
    fontSize: nf(fontSizes.h12),
  },
  disabled: {
    opacity: 0.4,
  },
  loaderWrapper: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
