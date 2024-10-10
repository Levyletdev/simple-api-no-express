const notAlpha = require("../../utils/validators/notAlpha.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const NotAlphaError = require("../../utils/errors/NotAlphaError.js");
const RequiredError = require("../../utils/errors/RequiredError.js");
const MinlengthError = require("../../utils/errors/MinlengthError.js");
const MaxlengthError = require("../../utils/errors/MaxlingthError.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");
const InverseStringError = require("../../utils/errors/InverseStringError.js");

class Nome {
  constructor(nome) {
    this.validateNome(nome);
  }

  validateNome(nome) {
    const path = "nome", min = 3, max = 20;

    if (isUndefined(nome)) throw new ValidationError(new RequiredError(path));

    if (notString(nome)) throw new ValidationError(new InverseStringError(path));

    if (nome.length < min) throw new ValidationError(new MinlengthError(path, min));

    if (nome.length > max) throw new ValidationError(new MaxlengthError(path, max));

    if (notAlpha(nome)) throw new ValidationError(new NotAlphaError(path));

    return (this.nome = nome);
  }

  toString() {
    return this.nome;
  }
}

module.exports = Nome;
