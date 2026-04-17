import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/custom-button/CustomButton';
import CustomTextInput from '../../../components/custom-input/CustomTextInput';
import { ImageBackgroundView } from '../../../components/ImageBackgroundView';
import CustomText from '../../../components/custom-text/CustomText';
import { colors } from '../../../constants/colors';
import { popToAuthRouteIfBehind } from '../../../navigation/authStackNavigation';
import type { AuthStackParamList } from '../../../navigation/types';
import { useAppDispatch } from '../../../store/hooks';
import { setAuthenticated } from '../../../store/slices/authSlice';
import { fontSizes, hpx } from '../../../utils/metric';
import { styles } from './styles';
import { User } from '../../../constants/svg';

type LoginIdentifier = 'email' | 'phone';

type Props = Readonly<NativeStackScreenProps<AuthStackParamList, 'Login'>>;

export function LoginScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const [identifierType, setIdentifierType] =
    useState<LoginIdentifier>('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [countryName, setCountryName] = useState('US');
  const [triedSubmit, setTriedSubmit] = useState(false);

  const canSubmit = useMemo(() => {
    if (!password || password.length < 8) {
      return false;
    }
    if (identifierType === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    }
    return phone.replace(/\D/g, '').length >= 10;
  }, [email, identifierType, password, phone]);

  const emailSubmitError =
    triedSubmit && identifierType === 'email' && !email.trim()
      ? 'Email is required'
      : triedSubmit &&
        identifierType === 'email' &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      ? 'Please enter a valid email address'
      : undefined;

  const phoneSubmitError =
    triedSubmit &&
    identifierType === 'phone' &&
    phone.replace(/\D/g, '').length < 10
      ? 'Enter a valid phone number'
      : undefined;

  const passwordSubmitError =
    triedSubmit && (!password || password.length < 8)
      ? 'Password must be at least 8 characters'
      : undefined;

  const handleSignIn = () => {
    setTriedSubmit(true);
    if (!canSubmit) {
      return;
    }
    dispatch(setAuthenticated(true));
  };

  const switchIdentifier = () => {
    setIdentifierType(t => (t === 'email' ? 'phone' : 'email'));
    setTriedSubmit(false);
  };

  const goToRegister = () => popToAuthRouteIfBehind(navigation, 'Register');

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
          {identifierType === 'email' ? (
            <CustomTextInput
              inputType="email"
              label="Email"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              showError={triedSubmit}
              error={emailSubmitError}
            />
          ) : (
            <CustomTextInput
              inputType="phone"
              isPhoneNumber
              label="Phone"
              placeholder="Phone"
              value={phone}
              onChangeText={setPhone}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              countryName={countryName}
              setCountryName={setCountryName}
              showError={triedSubmit}
              error={phoneSubmitError}
            />
          )}
          <CustomTextInput
            inputType="password"
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            showError={triedSubmit}
            error={passwordSubmitError}
          />
          <View style={styles.toggleWrap}>
            <CustomButton
              title={
                identifierType === 'email'
                  ? 'Use phone number instead'
                  : 'Use email instead'
              }
              textColor={colors.white}
              fontSize={fontSizes.h9}
              onPress={switchIdentifier}
              backgroundColor={colors.whiteTenPercent}
            />
          </View>
          <CustomText
            onPress={() => navigation.navigate('ForgotPassword')}
            suppressHighlighting
            textAlign="right"
            h10
          >
            Forgot password?
          </CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Sign in"
            textColor={colors.white}
            fontSize={fontSizes.h6}
            onPress={handleSignIn}
            backgroundColor={colors.primaryGreen}
          />

          <CustomButton
            title="Create an account"
            textColor={colors.white}
            fontSize={fontSizes.h8}
            onPress={goToRegister}
            backgroundColor={colors.whiteTwentyPercent}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackgroundView>
  );
}
