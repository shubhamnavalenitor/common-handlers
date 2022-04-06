const rupeeFormatter = require('./rupeeFormatter.js')
test('Formats the amount 100', () => {
  expect(rupeeFormatter(100)).toBe('100')
})
test('Formats the amount 1000', () => {
  expect(rupeeFormatter(1000)).toBe('1,000')
})
test('Formats the amount 10000', () => {
  expect(rupeeFormatter(10000)).toBe('10,000')
})
test('Formats the amount 100000', () => {
  expect(rupeeFormatter(100000)).toBe('1,00,000')
})
test('Formats the amount 1000000', () => {
  expect(rupeeFormatter(1000000)).toBe('10,00,000')
})
