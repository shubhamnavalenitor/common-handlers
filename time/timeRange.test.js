const timeRange = require('./timeRange');
test('Get next day', () => {
  expect(timeRange('today')).toBe(['2022-04-06T06:40:20.083Z', '2022-04-07T06:40:19.083Z']);
});