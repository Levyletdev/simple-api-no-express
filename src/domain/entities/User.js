const notIn = require("../../utils/validators/notIn.js");
const isNumber = require("../../utils/validators/isNumber.js");
const isString = require("../../utils/validators/isString.js");
const notAlpha = require("../../utils/validators/notAlpha.js");
const notNumber = require("../../utils/validators/notNumber.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");

class User {
  constructor({ nome, idade, genero, habilitado }) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
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
}

module.exports = User;
