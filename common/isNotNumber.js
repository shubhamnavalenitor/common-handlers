const isUndefined = require('./isUndefined')

function isNotNumber (value) {
  // Check for undefined values
  if (isUndefined(value)) {
    return true
  }

  // Check for non integers
  if (isNaN(value)) {
    return true
  }

  return false
}

module.exports = isNotNumber