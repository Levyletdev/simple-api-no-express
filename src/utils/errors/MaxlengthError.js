class MaxlengthError extends Error {
  constructor(value, max) {
    super();
    this.message = `${value} must be no more than ${max} characters long.`;
  }
}

module.exports = MaxlengthError;
