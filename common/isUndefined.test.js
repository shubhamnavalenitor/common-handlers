const isUndefined = require('./isUndefined');
test('Pass no value', () => {
  expect(isUndefined()).toBe(true);
});
test('Pass defined value', () => {
  expect(isUndefined(0)).toBe(false);
});
test('Pass null value', () => {
  expect(isUndefined(null)).toBe(true);
});
test('Pass undefined variable', () => {
  const testObject = undefined;
  expect(isUndefined(testObject)).toBe(true);
});
test('Pass null variable', () => {
  const testObject = null;
  expect(isUndefined(testObject)).toBe(true);
});
test('Pass empty object', () => {
  const testObject = {};
  expect(isUndefined(testObject)).toBe(false);
});
test('Pass empty array', () => {
  const testObject = {};
  expect(isUndefined(testObject)).toBe(false);
});
test('Pass undefined key in an object', () => {
  const testObject = {
    name: undefined
  };
  expect(isUndefined(testObject)).toBe(false);
});
test('Pass null key in an object', () => {
  const testObject = {
    name: null
  };
  expect(isUndefined(testObject)).toBe(false);
});
test('Pass empty string', () => {
  const testData = '';
  expect(isUndefined(testData)).toBe(false);
});