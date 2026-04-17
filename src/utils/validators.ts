import type { InputType } from '../components/custom-input/types';

export const validatorMap: Partial<Record<InputType, (value: string) => string>> = {
  email: (value) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  },
  phone: (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length > 0 && digits.length < 10) {
      return 'Please enter a valid phone number';
    }
    return '';
  },
  password: (value) => {
    if (value.length > 0 && value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  },
  name: (value) => {
    if (value.trim().length > 0 && value.trim().length < 2) {
      return 'Please enter your name';
    }
    return '';
  },
  text: () => '',
  contact: () => '',
};
