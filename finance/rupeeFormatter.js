// FIXME: Add currency for other countries
// Euro
// USD
// INR
// POUND
// YEN
// AUS
// CANDIAN Dollars
function rupeeFormatter(amount, currency = 'INR') {
  // Error handling
  if (amount === undefined || amount === null) return amount;

  // Eg 19989899    899 = hundreds
  amount = amount.toString();
  if (currency === 'USD') {
    const convertedAmt = amount.replace(/(?=[0-9])(?=(?:[0-9]{3})+(?![0-9]))/g, ',');
    return convertedAmt.startsWith(',') ? convertedAmt.substring(1) : convertedAmt;
  }
  let hundreds = amount.substring(amount.length - 3);
  const remaining = amount.substring(0, amount.length - 3);
  if (remaining !== '') hundreds = ',' + hundreds;
  return remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + hundreds;
}

module.exports = rupeeFormatter;
