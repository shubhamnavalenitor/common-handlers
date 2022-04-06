// FIXME: Add currency for other countries
function rupeeFormatter (amount, type) {
  const currencyTypeMapper = {
    IN: {},
    US: {}
  }
  // Error handling
  if (amount === undefined || amount === null) return amount

  // Eg 19989899    899 = hundreds
  amount = amount.toString()
  let hundreds = amount.substring(amount.length - 3)
  const remaining = amount.substring(0, amount.length - 3)
  if (remaining !== '') hundreds = ',' + hundreds
  return remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + hundreds
}

module.exports = rupeeFormatter
