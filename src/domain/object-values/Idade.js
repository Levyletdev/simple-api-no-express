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
        message: "Idade dever ser do tipo Number",
        value: idade,
      });
    }

    if (isNumber(idade) && idade < 0) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: "A idade não pode ser negativa",
        value: idade,
      });
    }

    if (isNumber(idade) && idade > 112) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: "A idade deve ser menor ou igual a 112",
        value: idade,
      });
    }

    return (this.idade = idade);
  }

  getIdade() {
    return this.idade;
  }
}

module.exports = Idade;
