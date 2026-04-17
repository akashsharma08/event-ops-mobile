import images from '../../../constants/images';
import { styles } from './styles';
import { ImageBackgroundView } from '../../../components/ImageBackgroundView';
import CustomText from '../../../components/custom-text/CustomText';
import { View } from 'react-native';
import CustomButton from '../../../components/custom-button/CustomButton';
import { useBottomSheet } from '../../../components/bottom-sheet/useBottomSheet';
import { colors } from '../../../constants/colors';
import { fontSizes } from '../../../utils/metric';

export function AppStartScreen() {
  const { openSheet } = useBottomSheet();
  return (
    <ImageBackgroundView
      source={images.app_background}
      contentContainerStyle={styles.container}
    >
      <View style={styles.contentContainer}>
        <CustomText h1>Event Ops</CustomText>
      </View>
      <CustomButton
        title="Get Started"
        textColor={colors.white}
        fontSize={fontSizes.h6}
        onPress={() => openSheet('getStarted')}
        backgroundColor={colors.primaryGreen}
      />
    </ImageBackgroundView>
  );
}
