const notIn = require("../../utils/validators/notIn.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const RequiredError = require("../../utils/errors/RequiredError.js");
const NotAllowedError = require("../../utils/errors/NotAllowedError.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");
const InverseStringError = require("../../utils/errors/InverseStringError.js");

class Genero {
  constructor(genero) {
    this.validateGenero(genero);
  }

  validateGenero(genero) {
    const path = "genero", values = ["Feminino", "Masculino"];

    if (isUndefined(genero)) throw new ValidationError(new RequiredError(path));

    if (notString(genero)) throw new ValidationError(new InverseStringError(path));

    if (notIn(genero, values)) throw new ValidationError(new NotAllowedError(genero, values));

    return (this.genero = genero);
  }

  toString() {
    return this.genero;
  }
}

module.exports = Genero;
