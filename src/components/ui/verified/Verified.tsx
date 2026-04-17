import React from 'react';
import { View } from 'react-native';
import CustomText from '../../custom-text/CustomText';
import { colors } from '../../../constants/colors';

export default function Verified() {
  return (
    <View accessibilityLabel="Verified">
      <CustomText h14 semiBold color={colors.primaryGreen}>
        ✓
      </CustomText>
    </View>
  );
}
