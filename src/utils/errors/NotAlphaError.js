class NotAlphaError extends Error {
  constructor(value) {
    super();
    this.message = `${value} must contain only letters and spaces.`;
  }
}

module.exports = NotAlphaError;
