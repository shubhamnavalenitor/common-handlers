/* eslint-disable no-console */
const timeRange = require('./timeRange');
test('Get next day', () => {
  const [res1, res2] = timeRange('day');
  console.log('day1: ', res1.format('DD/MM/YYYY HH:mm:ss'));
  console.log('day2: ', res2.format('DD/MM/YYYY HH:mm:ss'));
  // expect(timeRange('today')).toBe(['2022-04-06T06:40:20.083Z', '2022-04-07T06:40:19.083Z']);
});

test('Get next week', () => {
  const [res1, res2] = timeRange('week');
  console.log('week1: ', res1.format('DD/MM/YYYY HH:mm:ss'));
  console.log('week2: ', res2.format('DD/MM/YYYY HH:mm:ss'));
  // expect(timeRange('today')).toBe(['2022-04-06T06:40:20.083Z', '2022-04-07T06:40:19.083Z']);
});

test('Get next month', () => {
  const [res1, res2] = timeRange('month');
  console.log('month1: ', res1.format('DD/MM/YYYY HH:mm:ss'));
  console.log('month2: ', res2.format('DD/MM/YYYY HH:mm:ss'));
  // expect(timeRange('today')).toBe(['2022-04-06T06:40:20.083Z', '2022-04-07T06:40:19.083Z']);
});

test('Get next year', () => {
  const [res1, res2] = timeRange('year');
  console.log('year1: ', res1.format('DD/MM/YYYY HH:mm:ss'));
  console.log('year2: ', res2.format('DD/MM/YYYY HH:mm:ss'));
  // expect(timeRange('today')).toBe(['2022-04-06T06:40:20.083Z', '2022-04-07T06:40:19.083Z']);
});