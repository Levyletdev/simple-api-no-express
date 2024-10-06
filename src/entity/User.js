const ValidationError = require("../helpers/ValidationError.js");
const isString = require("../utils/validators/isString.js");
const isUndefined = require("../utils/validators/isUndefined.js");
const notAlpha = require("../utils/validators/notAlpha.js");
const notString = require("../utils/validators/notString.js");

class User {
  constructor({ nome, idade, sexo, habilitado }) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.habilitado = habilitado;
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
}

module.exports = User;
