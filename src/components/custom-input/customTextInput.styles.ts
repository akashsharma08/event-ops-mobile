import { StyleSheet } from 'react-native';
import { fontSizes, hpx, wpx } from '../../utils/metric';
import { colors } from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  darkInputWrapper: { backgroundColor: colors.white, borderWidth: wpx(0) },
  inputWrapper: {
    paddingHorizontal: hpx(16),
    height: hpx(56),
    borderRadius: hpx(100),
    backgroundColor: colors.blackEightyPercent,
    borderWidth: wpx(1),
    borderColor: colors.primaryGreen,
    justifyContent: 'center',
  },
  inputStyles: {
    flex: 1,
    fontSize: fontSizes.h10,
    color: colors.white,
    fontFamily: fonts.light,
  },
  darkInputStyles: { color: colors.black },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hpx(8),
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hpx(6),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: colors.blackEightyPercent,
    justifyContent: 'center',
  },
  verifyButton: {
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: wpx(4),
    paddingHorizontal: wpx(8),
    borderRadius: wpx(4),
    backgroundColor: colors.white,
  },

  dropdownContainer: {
    height: hpx(450),
    backgroundColor: colors.secondary,
    margin: hpx(20),
    borderRadius: hpx(12),
    padding: hpx(16),
  },

  dropdownItem: {
    paddingVertical: hpx(12),
    borderBottomWidth: wpx(1),
    borderColor: colors.whiteFiftyPercent,
  },
  error: {
    borderWidth: wpx(1),
    borderColor: colors.primaryGreen,
  },
  errorText: {
    color: colors.error500,
    marginTop: hpx(4),
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: hpx(8),
  },
  labelChip: {
    position: 'absolute',
    top: hpx(-11),
    left: wpx(12),
    zIndex: 2,
    backgroundColor: colors.primaryGreen,
    paddingHorizontal: wpx(4),
    borderRadius: wpx(8),
  },
});

export default styles;
