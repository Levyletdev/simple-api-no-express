class MinAgeRequirementError extends Error {
    constructor(value, age) {
        super();
        this.message = `'${value}' cannot be set to true for users under ${age} years of age.`
    }
}

module.exports = MinAgeRequirementError;