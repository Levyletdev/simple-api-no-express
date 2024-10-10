const notNumber = require("../../utils/validators/notNumber.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const RequiredError = require("../../utils/errors/RequiredError.js");
const LessThanError = require("../../utils/errors/LessThanError.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");
const GreaterThanError = require("../../utils/errors/GreaterThanError.js");
const InverseNumberError = require("../../utils/errors/InverseNumberError.js");

class Idade {
  constructor(idade) {
    this.validateIdade(idade);
  }

  validateIdade(idade) {
    const path = 'idade', min = 1, max = 112;
    if (isUndefined(idade)) throw new ValidationError(new RequiredError(path)) 

    if (notNumber(idade)) throw new ValidationError(new InverseNumberError(path));

    if (idade < min) throw new ValidationError(new LessThanError(path, min));

    if (idade > max) throw new ValidationError(new GreaterThanError(path, max));

    return (this.idade = idade);
  }

  toString() {
    return this.idade;
  }
}

module.exports = Idade;
