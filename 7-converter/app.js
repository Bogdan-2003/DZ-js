function convert(amount, fromCurrency, toCurrency) {
    if (fromCurrency === 'руб' && toCurrency === '$') {
        return amount / 100;
  }
    if (fromCurrency === '$' && toCurrency === 'руб') {
        return amount * 100;
  }
    return null;
}