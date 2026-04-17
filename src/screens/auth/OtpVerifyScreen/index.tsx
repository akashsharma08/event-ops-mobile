import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/custom-button/CustomButton';
import CustomTextInput from '../../../components/custom-input/CustomTextInput';
import { ImageBackgroundView } from '../../../components/ImageBackgroundView';
import CustomText from '../../../components/custom-text/CustomText';
import { colors } from '../../../constants/colors';
import { User } from '../../../constants/svg';
import type { AuthStackParamList } from '../../../navigation/types';
import { useAppDispatch } from '../../../store/hooks';
import { setAuthenticated } from '../../../store/slices/authSlice';
import { fontSizes, hpx } from '../../../utils/metric';
import { styles } from './styles';

const OTP_DIGITS = 6;
const OTP_PATTERN = new RegExp(`^[0-9]{${OTP_DIGITS}}$`);

type Props = Readonly<NativeStackScreenProps<AuthStackParamList, 'OtpVerify'>>;

export function OtpVerifyScreen({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const destination =
    route.params?.maskedEmail ??
    route.params?.maskedMobile ??
    route.params?.email;
  const [code, setCode] = useState('');
  const [triedSubmit, setTriedSubmit] = useState(false);

  const canSubmit = useMemo(
    () => OTP_PATTERN.test(code.trim()),
    [code],
  );

  const codeSubmitError =
    triedSubmit && !OTP_PATTERN.test(code.trim())
      ? `Enter the ${OTP_DIGITS}-digit code`
      : undefined;

  const handleVerify = () => {
    setTriedSubmit(true);
    if (!canSubmit) {
      return;
    }
    dispatch(setAuthenticated(true));
  };

  const hintLine =
    destination != null && destination.length > 0
      ? `Code sent to ${destination}`
      : 'Enter the code we sent you.';

  return (
    <ImageBackgroundView contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView
        style={styles.keyboardScroll}
        contentContainerStyle={[styles.scrollInner, styles.formContainer]}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          <View style={styles.userIconContainer}>
            <User height={hpx(44)} width={hpx(44)} stroke={colors.white} />
          </View>
          <CustomText center h10>
            {hintLine}
          </CustomText>
          <CustomTextInput
            inputType="text"
            label="Verification code"
            placeholder="Enter 6-digit code"
            value={code}
            onChangeText={text => setCode(text.replaceAll(/\D/g, ''))}
            keyboardType="number-pad"
            maxLength={OTP_DIGITS}
            showError={triedSubmit}
            error={codeSubmitError}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Verify and continue"
            textColor={colors.white}
            fontSize={fontSizes.h6}
            onPress={handleVerify}
            backgroundColor={colors.primaryGreen}
          />
          <CustomButton
            title="Back"
            textColor={colors.white}
            fontSize={fontSizes.h8}
            onPress={() => navigation.goBack()}
            backgroundColor={colors.whiteTwentyPercent}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackgroundView>
  );
}
