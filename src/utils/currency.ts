const CURRENCY_SYMBOL_MAP: Record<string, string> = {
  GBP: '£',
  USD: '$',
  AUD: '$',
  CAD: '$',
  NZD: '$',
  SGD: '$',
  EUR: '€',
  INR: '₹',
  JPY: '¥',
  CNY: '¥',
  AED: 'AED ',
};

export const getCurrencySymbol = (currencyCode?: string, fallback: string = '$') => {
  if (!currencyCode) return fallback;
  const normalizedCode = currencyCode.trim().toUpperCase();
  return CURRENCY_SYMBOL_MAP[normalizedCode] ?? fallback;
};

export const formatAmountWithCurrency = (value?: number | null, currencyCode?: string, fallback: string = '$') => {
  if (value === undefined || value === null) return '';
  return `${getCurrencySymbol(currencyCode, fallback)}${value}`;
};
