export const phoneNumberMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

const COUNTRY_LIST_UNSORTED = [
  { name: 'United States', code: 'US', dialCode: '+1' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44' },
  { name: 'India', code: 'IN', dialCode: '+91' },
  { name: 'Canada', code: 'CA', dialCode: '+1' },
  { name: 'Australia', code: 'AU', dialCode: '+61' },
  { name: 'Germany', code: 'DE', dialCode: '+49' },
  { name: 'France', code: 'FR', dialCode: '+33' },
  { name: 'Italy', code: 'IT', dialCode: '+39' },
  { name: 'Spain', code: 'ES', dialCode: '+34' },
  { name: 'Netherlands', code: 'NL', dialCode: '+31' },
  { name: 'Switzerland', code: 'CH', dialCode: '+41' },
  { name: 'Sweden', code: 'SE', dialCode: '+46' },
  { name: 'Norway', code: 'NO', dialCode: '+47' },
  { name: 'Denmark', code: 'DK', dialCode: '+45' },
  { name: 'Finland', code: 'FI', dialCode: '+358' },

  { name: 'China', code: 'CN', dialCode: '+86' },
  { name: 'Japan', code: 'JP', dialCode: '+81' },
  { name: 'South Korea', code: 'KR', dialCode: '+82' },
  { name: 'Singapore', code: 'SG', dialCode: '+65' },
  { name: 'Malaysia', code: 'MY', dialCode: '+60' },
  { name: 'Indonesia', code: 'ID', dialCode: '+62' },
  { name: 'Thailand', code: 'TH', dialCode: '+66' },
  { name: 'Vietnam', code: 'VN', dialCode: '+84' },
  { name: 'Philippines', code: 'PH', dialCode: '+63' },

  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966' },
  { name: 'Qatar', code: 'QA', dialCode: '+974' },
  { name: 'Kuwait', code: 'KW', dialCode: '+965' },
  { name: 'Oman', code: 'OM', dialCode: '+968' },

  { name: 'Turkey', code: 'TR', dialCode: '+90' },
  { name: 'Israel', code: 'IL', dialCode: '+972' },
  { name: 'Pakistan', code: 'PK', dialCode: '+92' },
  { name: 'Bangladesh', code: 'BD', dialCode: '+880' },
  { name: 'Sri Lanka', code: 'LK', dialCode: '+94' },
  { name: 'Nepal', code: 'NP', dialCode: '+977' },

  { name: 'Brazil', code: 'BR', dialCode: '+55' },
  { name: 'Mexico', code: 'MX', dialCode: '+52' },
  { name: 'Argentina', code: 'AR', dialCode: '+54' },
  { name: 'Chile', code: 'CL', dialCode: '+56' },
  { name: 'Colombia', code: 'CO', dialCode: '+57' },
  { name: 'Peru', code: 'PE', dialCode: '+51' },

  { name: 'South Africa', code: 'ZA', dialCode: '+27' },
  { name: 'Nigeria', code: 'NG', dialCode: '+234' },
  { name: 'Kenya', code: 'KE', dialCode: '+254' },
  { name: 'Egypt', code: 'EG', dialCode: '+20' },
];

export const COUNTRY_LIST = [...COUNTRY_LIST_UNSORTED].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const emailError: string = 'Please enter a valid email address';
export const checkEmail = (email: string) => {
  return emailRegex.test(email);
};
export const validateField = (value: string, rules: ((value: string) => string)[]) => {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return '';
};
