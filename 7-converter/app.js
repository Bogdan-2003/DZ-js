function convert(amount, fromCurrency, tarСurrency) {
    if (fromCurrency === 'руб' && toCurrency === '$') {
        return amount / 100;
  }
    if (fromCurrency === '$' && toCurrency === 'руб') {
        return amount * 100;
  }
    return null;
}