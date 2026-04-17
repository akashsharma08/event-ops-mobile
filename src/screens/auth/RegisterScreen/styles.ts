import { StyleSheet } from 'react-native';
import { hpx, wpx } from '../../../utils/metric';

export const styles = StyleSheet.create({
  keyboardScroll: {
    flex: 1,
  },
  formContainer: {
    flexGrow: 1,
    gap: hpx(24),
  },
  container: {
    flex: 1,
    padding: hpx(24),
  },
  userIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wpx(100),
    padding: wpx(12),
  },
  scrollInner: {
    flexGrow: 1,
    paddingBottom: hpx(24),
  },
  headerBlock: {
    alignItems: 'center',
  },
  form: {
    flex: 1,
    marginTop: hpx(44),
    gap: hpx(16),
    width: '100%',
    alignSelf: 'stretch',
  },
  fieldGap: {
    height: hpx(16),
  },
  gap: {
    height: hpx(12),
  },
  toggleWrap: {
    width: '100%',
    maxWidth: wpx(320),
    alignSelf: 'center',
  },
  buttonContainer: {
    gap: hpx(12),
    marginBottom: hpx(24),
  },
});
