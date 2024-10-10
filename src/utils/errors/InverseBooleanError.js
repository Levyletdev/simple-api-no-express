const InverseTypeError = require("./InverseTypeError.js");

class InverseBooleanError extends InverseTypeError {
    constructor(value) {
        super("boolean", value);
    }
}

module.exports = InverseBooleanError;