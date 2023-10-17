import isEmpty from './isEmpty';
test('Pass undefined value', () => {
  expect(isEmpty()).toBe(true);
});
test('Pass null value', () => {
  expect(isEmpty(null)).toBe(true);
});
test('Pass undefined variable', () => {
  const testData = undefined;
  expect(isEmpty(testData)).toBe(true);
});
test('Pass null variable', () => {
  const testData = null;
  expect(isEmpty(testData)).toBe(true);
});
test('Pass empty object', () => {
  const testData = {};
  expect(isEmpty(testData)).toBe(true);
});
test('Pass empty array', () => {
  const testData = [];
  expect(isEmpty(testData)).toBe(true);
});
test('Pass empty string', () => {
  const testData = '';
  expect(isEmpty(testData)).toBe(true);
});