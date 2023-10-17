import fixedZero from './fixedZero';
test('Add zero to 8', () => {
  expect(fixedZero(8)).toBe('08');
});
test('Does nothing to 8', () => {
  expect(fixedZero(8)).toBe('08');
});
test('Does nothing to 10', () => {
  expect(fixedZero(10)).toBe(10);
});
test('Does nothing to 00', () => {
  expect(fixedZero(0)).toBe('00');
});