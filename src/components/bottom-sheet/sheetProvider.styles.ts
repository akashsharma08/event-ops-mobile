import { StyleSheet } from 'react-native';
import { hpx, wpx } from '../../utils/metric';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: colors.secondary,
  },
  handleComponent: {
    paddingVertical: hpx(12),
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  pan: {
    width: wpx(56),
    height: hpx(4),
    borderRadius: hpx(12),
    backgroundColor: colors.white,
  },
  sheetView: { paddingHorizontal: wpx(20), flex: 1 },
});

export default styles;
