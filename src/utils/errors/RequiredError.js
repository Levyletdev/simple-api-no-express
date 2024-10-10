class RequiredError extends Error {
  constructor(value) {
    super();
    this.message = `${value} is required and must be provided.`;
  }
}

module.exports = RequiredError;
