import dayjs from 'dayjs';

const timeRange = (type, range = 1) => {
  const dayJs = dayjs();
  if (type === 'day') {
    return [
      dayJs,
      dayJs.add(range, 'd').subtract(1, 's')
    ];
  }

  if (type === 'week') {
    return [
      dayJs,
      dayJs.add(7 * range, 'd').subtract(1, 's')
    ];
  }

  if (type === 'month') {
    return [
      dayJs,
      dayJs.add(range, 'M').subtract(1, 's')
    ];
  }

  if (type === 'year') {
    return [
      dayJs,
      dayJs.add(range, 'y').subtract(1, 's')
    ];
  }

};

export default timeRange;