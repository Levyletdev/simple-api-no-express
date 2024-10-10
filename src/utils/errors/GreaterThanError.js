class GreaterThanError extends Error {
    constructor(value, max) {
        super();
        this.message = `${value} cannot be greater than ${max}`;
    }
}

module.exports = GreaterThanError;