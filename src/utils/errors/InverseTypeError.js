class InverseTypeError extends Error {
  constructor(type, value) {
    super();
    this.message = `${value || "Value"} must be of type ${type || "string"}.`;
  }
}

module.exports = InverseTypeError;
