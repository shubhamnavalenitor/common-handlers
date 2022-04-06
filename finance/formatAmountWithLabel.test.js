const formatAmountWithLabel = require('./formatAmountWithLabel.js')
test('Formats the amount 100', () => {
  expect(formatAmountWithLabel(1000, 'k')).toEqual({
    formattedAmmount: 1,
    label: 'k',
    display: {
      key: 'thousand',
      text: 'Thousand'
    }
  })
})
