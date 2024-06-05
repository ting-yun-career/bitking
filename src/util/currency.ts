const USDFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const usd = (num: number | undefined) => {
  if (typeof num !== 'number') {
    return '--'
  }
  return USDFormatter.format(num);
}

export const percent = (num: number | undefined, showSign: boolean = true, decimalPlaces: number = 2) => {
  if (typeof num !== 'number') {
    return '--'
  }
  const sign = showSign && num > 0 ? '+' : '';
  return sign + (Math.trunc(num * 100) / 100).toFixed(decimalPlaces) + '%';
}