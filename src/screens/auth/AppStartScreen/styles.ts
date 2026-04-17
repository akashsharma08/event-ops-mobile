import { StyleSheet } from 'react-native';
import { hpx } from '../../../utils/metric';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: hpx(24),
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(0,255,150,0.2)',
    // blurRadius: 100,
  },
});
