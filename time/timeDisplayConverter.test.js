const timeDisplayConverter = require('./timeDisplayConverter');
test('Convert to day', () => {
  expect(timeDisplayConverter(86400)).toEqual({
    shortDisplay: '1d',
    longDisplay: '1 Day'
  });
});

test('Convert to hour', () => {
  expect(timeDisplayConverter(3600)).toEqual({
    shortDisplay: '1h',
    longDisplay: '1 Hour'
  });
});

test('Convert to minute', () => {
  expect(timeDisplayConverter(60)).toEqual({
    shortDisplay: '1m',
    longDisplay: '1 Minute'
  });
});

test('Convert to seconds', () => {
  expect(timeDisplayConverter(10)).toEqual({
    shortDisplay: '10s',
    longDisplay: '10 Seconds'
  });
});

test('Convert to mixed data', () => {
  expect(timeDisplayConverter(94452)).toEqual({
    shortDisplay: '1d 2h 14m 12s',
    longDisplay: '1 Day 2 Hours 14 Minutes 12 Seconds'
  });
});

test('Convert to day with type raw', () => {
  expect(timeDisplayConverter(86400, 'raw')).toEqual({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
});

test('Convert to hour with type raw', () => {
  expect(timeDisplayConverter(3600, 'raw')).toEqual({
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 0
  });
});

test('Convert to minute with type raw', () => {
  expect(timeDisplayConverter(60, 'raw')).toEqual({
    days: 0,
    hours: 0,
    minutes: 1,
    seconds: 0
  });
});

test('Convert to seconds with type raw', () => {
  expect(timeDisplayConverter(10, 'raw')).toEqual({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 10
  });
});

test('Convert to mixed data with type raw', () => {
  expect(timeDisplayConverter(94452, 'raw')).toEqual({
    days: 1,
    hours: 2,
    minutes: 14,
    seconds: 12
  });
});