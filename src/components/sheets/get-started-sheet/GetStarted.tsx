import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomButton from '../../custom-button/CustomButton';
import { colors } from '../../../constants/colors';
import { fontSizes, hpx } from '../../../utils/metric';
import { navigationRef } from '../../../navigation/NavigationService';
import { useBottomSheet } from '../../bottom-sheet/useBottomSheet';

const GetStarted = () => {
  const { closeSheet } = useBottomSheet();
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor={colors.transparent}
        textColor={colors.white}
        buttonStyle={styles.button}
        fontSize={fontSizes.h6}
        title="Login"
        onPress={() => {
          closeSheet();
          navigationRef.navigate('Login');
        }}
      />
      <CustomButton
        backgroundColor={colors.primaryGreen}
        textColor={colors.white}
        fontSize={fontSizes.h6}
        title="Signup"
        onPress={() => {
          closeSheet();
          navigationRef.navigate('Register');
        }}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    paddingTop: hpx(32),
    gap: hpx(16),
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: colors.white,
  },
});
