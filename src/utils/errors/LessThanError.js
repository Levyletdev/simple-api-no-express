class LessThanError extends Error {
    constructor(value, min) {
        super();
        this.message = `${value} cannot be less than ${min}`;
    }
}

module.exports = LessThanError;