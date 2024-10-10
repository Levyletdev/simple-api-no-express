class NotAllowedError extends Error {
    constructor(path, [...values]) {
        super();
        const allowedValues = values.map((val, index) => {
            if (index === (values.length - 1)) return val;
            if (index === (values.length - 2)) return `${val} or `;
            return `${val}, `;
        }).join("");
        this.message = `${path} is invalid. Only ${allowedValues} is allowed.`;
    }
}

module.exports = NotAllowedError;