import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProviderOnboardingStep } from '../types/auth';
import { IS_GUEST_SESSION } from '../constants/key';

export const getExperience = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());

  const years = diffInMonths / 12;

  const formattedYears = Number.isInteger(years) ? years : parseFloat(years.toFixed(1));

  return `${formattedYears} ${formattedYears === 1 ? 'yr' : 'yrs'}`;
};
export const ONBOARDING_STEP_ORDER = [
  ProviderOnboardingStep.PERSONAL_DETAILS,
  ProviderOnboardingStep.CLINIC_AND_VISIT,
  ProviderOnboardingStep.INSURANCE_PROVIDERS,
  ProviderOnboardingStep.WORK_EXPERIENCE,
  ProviderOnboardingStep.EDUCATION,
  ProviderOnboardingStep.CERTIFICATIONS,
  ProviderOnboardingStep.SKILLS_AND_SPECIALIZATIONS,
  ProviderOnboardingStep.SUBMIT_FOR_APPROVAL,
];

export const isStepLower = (storedStep: string | null, targetStep: ProviderOnboardingStep) => {
  if (!storedStep) return true;

  const storedIndex = ONBOARDING_STEP_ORDER.indexOf(storedStep as ProviderOnboardingStep);

  const targetIndex = ONBOARDING_STEP_ORDER.indexOf(targetStep);

  return storedIndex < targetIndex;
};

export const isGuestSession = async () => {
  const guestSession = await AsyncStorage.getItem(IS_GUEST_SESSION);
  return guestSession === 'true';
};
