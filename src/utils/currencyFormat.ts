const currencyFormat = (currency: number) => {
  const str = currency.toString();
  const newStr =
    str.substring(0, str.length - 3) +
    ' ' +
    str.substring(str.length - 3, str.length);
  return newStr;
};

export default currencyFormat;
