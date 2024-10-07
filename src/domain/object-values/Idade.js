const isNumber = require("../../utils/validators/isNumber.js");
const notNumber = require("../../utils/validators/notNumber.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");

class Idade {
  constructor(idade) {
    this.validateIdade(idade);
  }

  validateIdade(idade) {
    if (isUndefined(idade)) {
      throw new ValidationError({
        name: "MissingPropertyError",
        message: "Idade é obrigatória",
        value: null,
      });
    }

    if (notNumber(idade)) {
      throw new ValidationError({
        name: "InverseTypeError",
        message: "Idade dever ser do tipo String",
        value: idade,
      });
    }

    if (isNumber(idade) && idade < 18) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: "A idade deve ser maior ou igual a 18",
        value: idade,
      });
    }

    if (isNumber(idade) && idade > 100) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: "A idade deve ser menor que ou igual a 100",
        value: idade,
      });
    }
  }
}

module.exports = Idade;
