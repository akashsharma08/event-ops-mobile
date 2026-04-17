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
import { useRegister } from '../../../api/auth/useRegister';
import { popToAuthRouteIfBehind } from '../../../navigation/authStackNavigation';
import type { AuthStackParamList } from '../../../navigation/types';
import { fontSizes, hpx } from '../../../utils/metric';
import { styles } from './styles';

type RegisterIdentifier = 'email' | 'phone';

type Props = Readonly<NativeStackScreenProps<AuthStackParamList, 'Register'>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digitsOnly(value: string): string {
  return value.replaceAll(/\D/g, '');
}

type RegisterFormState = {
  triedSubmit: boolean;
  identifierType: RegisterIdentifier;
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
};

function getRegisterFormErrors(s: RegisterFormState): RegisterFormErrors {
  if (!s.triedSubmit) {
    return {};
  }
  const errors: RegisterFormErrors = {};
  if (s.name.trim().length < 2) {
    errors.name = 'Please enter your name';
  }
  if (s.identifierType === 'email') {
    if (!s.email.trim()) {
      errors.email = 'Email is required';
    } else if (!EMAIL_RE.test(s.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }
  } else if (digitsOnly(s.phone).length < 10) {
    errors.phone = 'Enter a valid phone number';
  }
  if (!s.password || s.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }
  if (!s.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (s.password !== s.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
}

function canSubmitRegister(s: RegisterFormState): boolean {
  if (s.name.trim().length < 2) {
    return false;
  }
  if (!s.password || s.password.length < 8) {
    return false;
  }
  if (s.password !== s.confirmPassword) {
    return false;
  }
  if (s.identifierType === 'email') {
    return EMAIL_RE.test(s.email.trim());
  }
  return digitsOnly(s.phone).length >= 10;
}

type IdentifierFieldsProps = {
  identifierType: RegisterIdentifier;
  email: string;
  onChangeEmail: (v: string) => void;
  phone: string;
  onChangePhone: (v: string) => void;
  countryCode: string;
  setCountryCode: (v: string) => void;
  countryName: string;
  setCountryName: (v: string) => void;
  triedSubmit: boolean;
  errors: RegisterFormErrors;
};

function RegisterIdentifierFields({
  identifierType,
  email,
  onChangeEmail,
  phone,
  onChangePhone,
  countryCode,
  setCountryCode,
  countryName,
  setCountryName,
  triedSubmit,
  errors,
}: Readonly<IdentifierFieldsProps>) {
  if (identifierType === 'email') {
    return (
      <CustomTextInput
        inputType="email"
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={onChangeEmail}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        showError={triedSubmit}
        error={errors.email}
      />
    );
  }
  return (
    <CustomTextInput
      inputType="phone"
      isPhoneNumber
      label="Phone"
      placeholder="Phone"
      value={phone}
      onChangeText={onChangePhone}
      countryCode={countryCode}
      setCountryCode={setCountryCode}
      countryName={countryName}
      setCountryName={setCountryName}
      showError={triedSubmit}
      error={errors.phone}
    />
  );
}

export function RegisterScreen({ navigation }: Props) {
  const { mutate: submitRegister, isPending: isRegistering } = useRegister();
  const [identifierType, setIdentifierType] =
    useState<RegisterIdentifier>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [countryName, setCountryName] = useState('US');
  const [triedSubmit, setTriedSubmit] = useState(false);

  const formState = useMemo<RegisterFormState>(
    () => ({
      triedSubmit,
      identifierType,
      name,
      email,
      phone,
      password,
      confirmPassword,
    }),
    [
      triedSubmit,
      identifierType,
      name,
      email,
      phone,
      password,
      confirmPassword,
    ],
  );

  const errors = useMemo(() => getRegisterFormErrors(formState), [formState]);

  const canSubmit = useMemo(() => canSubmitRegister(formState), [formState]);

  const handleContinue = () => {
    setTriedSubmit(true);
    if (!canSubmit) {
      return;
    }
    const base = {
      fullName: name.trim(),
      termsAccepted: true,
      password,
    } as const;
    if (identifierType === 'email') {
      submitRegister({
        ...base,
        email: email.trim(),
      });
      return;
    }
    submitRegister({
      ...base,
      mobileNumber: digitsOnly(phone),
      countryCode,
      countryName,
    });
  };

  const switchIdentifier = () => {
    setIdentifierType(t => (t === 'email' ? 'phone' : 'email'));
    setTriedSubmit(false);
  };

  const toggleTitle =
    identifierType === 'email'
      ? 'Use phone number instead'
      : 'Use email instead';

  const goToLogin = () => popToAuthRouteIfBehind(navigation, 'Login');

  return (
    <ImageBackgroundView contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView
        style={styles.keyboardScroll}
        contentContainerStyle={[styles.scrollInner, styles.formContainer]}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        enableOnAndroid
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.form}>
          <View style={styles.userIconContainer}>
            <User height={hpx(44)} width={hpx(44)} stroke={colors.white} />
          </View>
          <CustomTextInput
            inputType="name"
            label="Full name"
            placeholder="Full name"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            showError={triedSubmit}
            error={errors.name}
          />
          <RegisterIdentifierFields
            identifierType={identifierType}
            email={email}
            onChangeEmail={setEmail}
            phone={phone}
            onChangePhone={setPhone}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            countryName={countryName}
            setCountryName={setCountryName}
            triedSubmit={triedSubmit}
            errors={errors}
          />
          <CustomTextInput
            inputType="password"
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            showError={triedSubmit}
            error={errors.password}
          />
          <CustomTextInput
            inputType="password"
            label="Confirm password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            showError={triedSubmit}
            error={errors.confirmPassword}
          />
          <View style={styles.toggleWrap}>
            <CustomButton
              title={toggleTitle}
              textColor={colors.white}
              fontSize={fontSizes.h9}
              onPress={switchIdentifier}
              backgroundColor={colors.whiteTenPercent}
            />
          </View>
          <CustomText
            onPress={goToLogin}
            suppressHighlighting
            textAlign="right"
            h10
          >
            Already have an account?
          </CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Continue to OTP"
            textColor={colors.white}
            fontSize={fontSizes.h6}
            onPress={handleContinue}
            loading={isRegistering}
            backgroundColor={colors.primaryGreen}
          />
          <CustomButton
            title="Back to log in"
            textColor={colors.white}
            fontSize={fontSizes.h8}
            onPress={goToLogin}
            backgroundColor={colors.whiteTwentyPercent}
          />
        </View>
      </KeyboardAwareScrollView>
    </ImageBackgroundView>
  );
}
