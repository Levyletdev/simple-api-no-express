const Idade = require("./Idade.js");
const notBoolean = require("../../utils/validators/notBoolean.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");

class Habilitado {
  constructor(boolean = false, idade) {
    this.validateHabilitato(boolean, idade);
    this.habilitado = boolean;
  }

  validateHabilitato(boolean, idade) {
    const age = new Idade(idade);

    if (notBoolean(boolean)) {
      throw new ValidationError({
        name: "InverseTypeError",
        message: "Habilitado dever ser do tipo Boolean",
      });
    }

    if (age < 18 && boolean === true) {
      throw new ValidationError({
        name: "InvalidDefinitonError",
        message: "Não é permitido ser habilitado com menos de 18 anos",
        value: boolean,
      });
    }
  }
}

module.exports = Habilitado;
