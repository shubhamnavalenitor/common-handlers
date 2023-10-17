import isNotNumber from './isNotNumber';
test('Pass string', () => {
  expect(isNotNumber('a')).toBe(true);
});
test('Pass stringified number', () => {
  expect(isNotNumber('2')).toBe(false);
});
test('Pass number', () => {
  expect(isNotNumber(2)).toBe(false);
});
test('Pass 0', () => {
  expect(isNotNumber(0)).toBe(false);
});
test('Pass float number 1.1', () => {
  expect(isNotNumber(1.1)).toBe(false);
});
test('Pass float number as a string', () => {
  expect(isNotNumber('1.1')).toBe(false);
});
test('Pass undefined', () => {
  expect(isNotNumber()).toBe(true);
});
test('Pass null', () => {
  expect(isNotNumber(null)).toBe(true);
});
test('Pass null data', () => {
  const testData = null;
  expect(isNotNumber(testData)).toBe(true);
});
test('Pass undefined data', () => {
  const testData = undefined;
  expect(isNotNumber(testData)).toBe(true);
});