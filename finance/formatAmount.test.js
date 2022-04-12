const formatAmount = require('./formatAmount');
test('Formats the amount 1000', () => {
  expect(formatAmount(1000)).toEqual({
    valueDisplay: 1,
    valueLabel: 'k'
  });
});

test('Formats the amount 10000', () => {
  expect(formatAmount(10000)).toEqual({
    valueDisplay: 10,
    valueLabel: 'k'
  });
});

test('Formats the amount 100000', () => {
  expect(formatAmount(100000)).toEqual({
    valueDisplay: 1,
    valueLabel: 'l'
  });
});

test('Formats the amount 1000000', () => {
  expect(formatAmount(1000000)).toEqual({
    valueDisplay: 10,
    valueLabel: 'l'
  });
});

test('Formats the amount 10000000', () => {
  expect(formatAmount(10000000)).toEqual({
    valueDisplay: 1,
    valueLabel: 'c'
  });
});

test('Formats the amount 100000000', () => {
  expect(formatAmount(100000000)).toEqual({
    valueDisplay: 10,
    valueLabel: 'c'
  });
});

test('Formats the amount 1000000000', () => {
  expect(formatAmount(1000000000)).toEqual({
    valueDisplay: 100,
    valueLabel: 'c'
  });
});

