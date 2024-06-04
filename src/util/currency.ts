const USDFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const usd = (num: number) => {
  if (typeof num !== 'number') {
    return '--'
  }
  return USDFormatter.format(num);
}

export const percent = (num: number, showSign: boolean = true) => {
  if (typeof num !== 'number') {
    return '--'
  }
  const sign = showSign && num > 0 ? '+' : '';
  return sign + (Math.trunc(num * 100) / 100).toFixed(2) + '%';
}