const Idade = require("./Idade.js");
const notBoolean = require("../../utils/validators/notBoolean.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");
const InverseBooleanError = require("../../utils/errors/InverseBooleanError.js");
const MinAgeRequirementError = require("../../utils/errors/MinAgeRequirementError.js");

class Habilitado {
  constructor(boolean = false, idade) {
    this.validateHabilitato(boolean, idade);
  }

  validateHabilitato(boolean, idade) {
    const path = "habilitado", age = new Idade(idade).toString(), minAge = 18;

    if (notBoolean(boolean)) throw new ValidationError(new InverseBooleanError(path));
    if (age < minAge && boolean === true) throw new ValidationError(new MinAgeRequirementError(path, minAge));

    return (this.habilitado = boolean);
  }

  toString() {
    return this.habilitado;
  }
}

module.exports = Habilitado;
