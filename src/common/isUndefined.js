const isUndefined = (value) => {
  // Check for undefined value
  if (value === undefined) {
    return true;
  }

  // Check for null value
  if (value === null) {
    return true;
  }

  return false;
};

export default isUndefined;