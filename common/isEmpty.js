const isUndefined = require('./isUndefined');

function isEmpty(value) {
  // Check for undefined values
  if (isUndefined(value)) {
    return true;
  }

  // Check for empty array values
  if (value.length === 0) {
    return true;
  }

  // Check for undefined objects
  if (Object.keys(value).length === 0) {
    return true;
  }

  return false;
}

module.exports = isEmpty;