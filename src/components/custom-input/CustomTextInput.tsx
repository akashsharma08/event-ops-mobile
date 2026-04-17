import type { ComponentType, ForwardedRef } from 'react';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Modal,
  Pressable,
  TextInput,
  View,
  type BlurEvent,
  type FocusEvent,
} from 'react-native';
import type { SvgProps } from 'react-native-svg';
import MaskInput from 'react-native-mask-input';
import * as CircleFlags from 'react-native-svg-circle-country-flags';
import { ChevronDown, Hidden, Show } from '../svg/icons';
import CustomText from '../custom-text/CustomText';
import Verified from '../ui/verified/Verified';
import { colors } from '../../constants/colors';
import { hpx, wpx } from '../../utils/metric';
import { validatorMap } from '../../utils/validators';
import { COUNTRY_LIST, phoneNumberMask } from '.';
import styles from './customTextInput.styles';
import { CustomTextInputProps } from './types';

const FLAG_SIZE = wpx(22);
/** Vertical offset when the label is collapsed (hidden); animates to 0 when floated. */
const LABEL_COLLAPSE_TRANSLATE_Y = hpx(14);

const getFlagComponent = (code: string): ComponentType<SvgProps> => {
  if (!code) {
    return CircleFlags.Us;
  }
  const normalized = (code[0].toUpperCase() +
    code.slice(1).toLowerCase()) as keyof typeof CircleFlags;
  const Flag = CircleFlags[normalized] as ComponentType<SvgProps> | undefined;
  return Flag ?? CircleFlags.Us;
};

const CustomTextInput = (
  props: CustomTextInputProps,
  ref: ForwardedRef<TextInput>,
) => {
  const {
    verifyLoader,
    doVerify,
    onVerify,
    error,
    inputType,
    mandatory,
    secureTextEntry,
    value,
    placeholder,
    wrapperStyle,
    rightIcon,
    rightIconStyle,
    onPressRightIcon,
    leftIcon,
    inputContainerStyle,
    label,
    verified,
    isPhoneNumber,
    countryCode,
    countryName,
    setCountryCode,
    setCountryName,
    showError = false,
    light,
    onFocus: onFocusProp,
    onBlur: onBlurProp,
    ...rest
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const updatedPlaceholder = useMemo(
    () => (mandatory ? `${placeholder} *` : placeholder),
    [mandatory, placeholder],
  );
  /** Hide placeholder while focused so it does not compete with the floating label. */
  const resolvedPlaceholder = isFocused ? '' : (updatedPlaceholder ?? '');
  const [validationError, setValidationError] = useState('');

  const hasValue = Boolean(value && String(value).length > 0);
  const isFloated = isFocused || hasValue;
  const labelProgress = useRef(
    new Animated.Value(isFloated ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.timing(labelProgress, {
      toValue: isFloated ? 1 : 0,
      duration: 220,
      useNativeDriver: true,
    }).start();
  }, [isFloated, labelProgress]);

  const handleChange = (text: string) => {
    props.onChangeText?.(text);
    const validator = validatorMap[inputType];
    const err = validator ? validator(text) : '';
    setValidationError(text === '' ? '' : err);
  };
  const finalError = showError ? error || validationError : '';
  const errorStyles = finalError && showError ? styles.error : {};
  const handleBlurWhenEmpty = () => {
    if (value === '') setValidationError('');
  };

  const handleInputFocus = (e: FocusEvent) => {
    setIsFocused(true);
    onFocusProp?.(e);
  };

  const handleInputBlur = (e: BlurEvent) => {
    setIsFocused(false);
    handleBlurWhenEmpty();
    onBlurProp?.(e);
  };
  const showVerifyButton = Boolean(
    doVerify && !verified && value && finalError.length === 0,
  );

  useEffect(() => {
    setIsPasswordVisible(secureTextEntry);
  }, [secureTextEntry]);

  useEffect(() => {
    if (!countryCode || !setCountryName) return;
    const match = COUNTRY_LIST.find(item => item.dialCode === countryCode);
    if (match) {
      setCountryName(match.code);
    }
  }, [countryCode, setCountryName]);

  const SelectedFlag = getFlagComponent(countryName || '');

  const renderVerifyButton = () =>
    showVerifyButton ? (
      <Pressable onPress={onVerify} style={styles.verifyButton}>
        <CustomText h17 semiBold color={colors.gray900}>
          {verifyLoader ? 'Sending...' : 'Verify'}
        </CustomText>
      </Pressable>
    ) : null;

  const renderPhoneInput = () => (
    <View style={styles.countryCodeContainer}>
      <Pressable
        style={styles.countryCode}
        onPress={() => {
          if (!verified) setShowCountryPicker(true);
        }}
      >
        <SelectedFlag width={FLAG_SIZE} height={FLAG_SIZE} />
        <CustomText color={light ? colors.gray900 : colors.white} h14 medium>
          {countryCode}
        </CustomText>
        <ChevronDown stroke={light ? colors.gray900 : colors.white} />
      </Pressable>
      <MaskInput
        {...rest}
        onChangeText={(_masked: string, unmasked: string) =>
          handleChange(unmasked)
        }
        inputMode="numeric"
        keyboardType="phone-pad"
        ref={ref}
        maxLength={12}
        value={value}
        placeholderTextColor={light ? colors.gray500 : colors.gray300}
        placeholder={resolvedPlaceholder}
        style={[
          styles.inputStyles,
          inputContainerStyle,
          light && styles.darkInputStyles,
        ]}
        mask={phoneNumberMask}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {renderVerifyButton()}
      {verified && <Verified />}
    </View>
  );

  const renderDefaultInput = () => (
    <View style={styles.countryCodeContainer}>
      {leftIcon}
      <TextInput
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleChange}
        secureTextEntry={isPasswordVisible}
        ref={ref}
        value={value}
        placeholderTextColor={colors.whiteFortyPercent}
        placeholder={resolvedPlaceholder}
        style={[
          styles.inputStyles,
          light && styles.darkInputStyles,
          inputContainerStyle,
        ]}
      />
      {renderVerifyButton()}
      {verified && <Verified />}
      {rightIcon && (
        <Pressable onPress={onPressRightIcon} style={rightIconStyle}>
          {rightIcon}
        </Pressable>
      )}
      {secureTextEntry ? (
        <Pressable
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={rightIconStyle}
        >
          {isPasswordVisible ? (
            <Hidden height={wpx(20)} width={wpx(20)} />
          ) : (
            <Show height={wpx(20)} width={wpx(20)} />
          )}
        </Pressable>
      ) : null}
    </View>
  );

  const renderCountryPickerModal = () => (
    <Modal
      statusBarTranslucent
      visible={showCountryPicker}
      transparent
      animationType="fade"
      onRequestClose={() => setShowCountryPicker(false)}
    >
      <Pressable
        style={styles.modalOverlay}
        onPress={() => setShowCountryPicker(false)}
      >
        <View style={styles.dropdownContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            decelerationRate="normal"
            data={COUNTRY_LIST}
            keyExtractor={item => item.code}
            renderItem={({ item }) => {
              const ItemFlag = getFlagComponent(item.code);
              return (
                <Pressable
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCountryCode?.(item.dialCode);
                    setCountryName?.(item.code || '');
                    setShowCountryPicker(false);
                  }}
                >
                  <View style={styles.dropdownRow}>
                    <ItemFlag width={FLAG_SIZE} height={FLAG_SIZE} />
                    <CustomText color={colors.gray900} semiBold>
                      {item.name} ({item.dialCode})
                    </CustomText>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );

  return (
    <View>
      <View
        style={[
          styles.inputWrapper,
          light && styles.darkInputWrapper,
          errorStyles,
          wrapperStyle,
        ]}
      >
        {label ? (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.labelChip,
              {
                opacity: labelProgress,
                transform: [
                  {
                    translateY: labelProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [LABEL_COLLAPSE_TRANSLATE_Y, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            <CustomText h16 color={colors.white}>
              {mandatory ? `${label} *` : label}
            </CustomText>
          </Animated.View>
        ) : null}
        {isPhoneNumber ? renderPhoneInput() : renderDefaultInput()}
        {renderCountryPickerModal()}
      </View>
      {finalError.length > 0 && (
        <CustomText h16 semiBold style={styles.errorText}>
          {finalError}
        </CustomText>
      )}
    </View>
  );
};

export default forwardRef(CustomTextInput);
