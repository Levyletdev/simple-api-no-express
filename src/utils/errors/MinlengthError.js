class MinlengthError extends Error {
  constructor(value, min) {
    super();
    this.message = `${value} must be at least ${min} characters long.`;
  }
}

module.exports = MinlengthError;
