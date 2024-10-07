const isString = require("../../utils/validators/isString.js");
const notAlpha = require("../../utils/validators/notAlpha.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");

class Nome {
  constructor(nome) {
    this.validateNome(nome);
    this.getNome();
  }

  validateNome(nome) {
    if (isUndefined(nome)) {
      throw new ValidationError({
        name: "MissingPropertyError",
        message: "Nome é obrigatório",
        value: null,
      });
    }

    if (notString(nome)) {
      throw new ValidationError({
        name: "InverseTypeError",
        message: "Nome dever ser do tipo String",
        value: nome,
      });
    }

    if (isString(nome) && nome.length < 3) {
      throw new ValidationError({
        name: "InvalidDefinitionError",
        message: "O nome deve ter no mínimo 3 caracteres",
        value: nome,
      });
    }

    if (isString(nome) && nome.length > 25) {
      throw new ValidationError({
        name: "InvalidDefinitonError",
        message: "O nome deve menos de 25 caracteres",
        value: nome,
      });
    }

    if (isString(nome) && notAlpha(nome)) {
      throw new ValidationError({
        name: "InvalidDefinitonError",
        message: "O nome deve conter apenas letras e espaços",
        value: nome,
      });
    }

    return (this.nome = nome);
  }

  getNome() {
    return this.nome;
  }
}

module.exports = Nome;
