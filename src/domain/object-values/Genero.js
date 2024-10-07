const notIn = require("../../utils/validators/notIn.js");
const isString = require("../../utils/validators/isString.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");

class Genero {
  constructor(genero) {
    this.validateGenero(genero);
  }

  validateGenero(genero) {
    if (isUndefined(genero)) {
      throw new ValidationError({
        name: "MissingPropertyError",
        message: "Genêro é obrigatório",
        value: null,
      });
    }

    if (notString(genero)) {
      throw new ValidationError({
        name: "InverseTypeError",
        message: "Genêro dever ser do tipo String",
        value: genero,
      });
    }

    if (isString(genero) && notIn(genero, ["Feminino", "Masculino"])) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: `${genero} não é valido, apenas Masculino e Feminino`,
        value: genero,
      });
    }

    return (this.genero = genero);
  }

  getGenero() {
    return this.genero;
  }
}

module.exports = Genero;
