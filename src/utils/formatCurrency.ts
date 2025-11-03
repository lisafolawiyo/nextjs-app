const locale = {
  USD: 'en',
  NGN: 'en-NG',
  ZWD: 'en-ZW',
  ZMW: 'en-ZM',
  BWP: 'en-BW',
  KES: 'en-KE',
};

export const formatCurrency = (num: number, currency = 'USD') => {
  return new Intl.NumberFormat(locale[currency as keyof typeof locale], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(num);
};
