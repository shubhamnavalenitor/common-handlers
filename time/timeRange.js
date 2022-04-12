const dayjs = require('dayjs');

function timeRange(type) {
  const dayJs = dayjs();
  if (type === 'today') {
    return [
      dayJs,
      dayJs.add(1, 'd').subtract(1, 's')
    ];
  }

  if (type === 'week') {
    return [
      dayJs,
      dayJs.add(7, 'd').subtract(1, 's')
    ];
  }

  if (type === 'month') {
    return [
      dayJs,
      dayJs.add(1, 'M').subtract(1, 's')
    ];
  }

  if (type === 'year') {
    return [
      dayJs,
      dayJs.add(1, 'y').subtract(1, 's')
    ];
  }

}

module.exports = timeRange;