function formatAmountWithLabel (amount, label) {
  const thousand = 1000
  const lakh = 100000
  const crore = 10000000
  const amountLabels = {
    k: {
      key: 'thousand',
      text: 'Thousand'
    },
    l: {
      key: 'lakh',
      text: 'Lakhs'
    },
    c: {
      key: 'crore',
      text: 'Crores'
    }
  }

  const transformedData = {
    formattedAmmount: -1,
    label: '',
    display: ''
  }
  switch (label) {
    case 'k':
      transformedData.formattedAmmount = amount / thousand
      transformedData.label = label
      transformedData.display = amountLabels[label]
      break;
    case 'l':
      transformedData.formattedAmmount = amount / lakh
      transformedData.label = label
      transformedData.display = amountLabels[label]
      break;
    case 'c':
      transformedData.formattedAmmount = amount / crore
      transformedData.label = label
      transformedData.display = amountLabels[label]
      break;
    default :
      transformedData.formattedAmmount = amount
      transformedData.label = label
      transformedData.display = amountLabels[label]
      break;
  }

  return transformedData
    
}

module.exports = formatAmountWithLabel