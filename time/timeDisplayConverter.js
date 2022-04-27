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

  let shortDisplay = '';
  let longDisplay = '';

  // days
  if (days > 0) {
    shortDisplay += `${days}d `;
    longDisplay += (days === 1) ? `${days} Day ` : `${days} Days `;
  }

  // hours
  if (hours > 0) {
    shortDisplay += `${hours}h `;
    longDisplay += (hours === 1) ? `${hours} Hour ` : `${hours} Hours `;
  }

  // minutes
  if (minutes > 0) {
    shortDisplay += `${minutes}m `;
    longDisplay += (minutes === 1) ? `${minutes} Minute ` : `${minutes} Minutes `;
  }

  // seconds
  if (seconds > 0) {
    shortDisplay += `${seconds}s`;
    longDisplay += (seconds === 1) ? `${seconds} Second` : `${seconds} Seconds`;
  }

  return {
    shortDisplay: shortDisplay.trim(),
    longDisplay: longDisplay.trim()
  };
}

module.exports = timeDisplayConverter;