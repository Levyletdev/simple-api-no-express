function isBoolean(value) {
  return typeof value === "boolean" || value === "true" || value === "false";
}

module.exports = isBoolean;
