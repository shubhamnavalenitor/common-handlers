function formatAmount(value) {
  const thousand = 1000;
  const lakh = 100000;
  const crore = 10000000;
  let valueDisplay;
  let valueLabel;

  if (value / lakh >= 100) {
    valueDisplay = value / crore;
    valueLabel = 'c';
  } else if (value / thousand >= 100) {
    valueDisplay = value / lakh;
    valueLabel = 'l';
  } else {
    valueDisplay = value / thousand;
    valueLabel = 'k';
  }

  return {
    valueDisplay,
    valueLabel
  };
}

module.exports = formatAmount;