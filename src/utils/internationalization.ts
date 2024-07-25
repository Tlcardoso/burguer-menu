

export const formatPrice = (value: number, currency: string, locale: string): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(value);
};
