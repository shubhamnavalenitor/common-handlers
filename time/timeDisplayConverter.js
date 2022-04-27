function timeDisplayConverter(value, type) {
  const days = Math.floor(value / 86400);
  const hours = Math.floor(value % 86400 / 3600);
  const minutes = Math.floor(value % 3600 / 60);
  const seconds = Math.floor(value % 3600 % 60);

  if (type === 'raw') {
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  const daysDisplay = days > 0 ? `${days}d ` : '';
  const hoursDisplay = hours > 0 ? `${hours}h ` : '';
  const minutesDisplay = minutes > 0 ? `${minutes}m ` : '';
  const secondsDisplay = seconds > 0 ? `${seconds}s` : '';

  return daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;
}

module.exports = timeDisplayConverter;