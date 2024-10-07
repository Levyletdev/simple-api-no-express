const Nome = require("../object-values/Nome.js");
const Idade = require("../object-values/Idade.js");
const notIn = require("../../utils/validators/notIn.js");
const isNumber = require("../../utils/validators/isNumber.js");
const isString = require("../../utils/validators/isString.js");
const notAlpha = require("../../utils/validators/notAlpha.js");
const notNumber = require("../../utils/validators/notNumber.js");
const notString = require("../../utils/validators/notString.js");
const isUndefined = require("../../utils/validators/isUndefined.js");
const ValidationError = require("../../utils/helpers/ValidationError.js");
const Genero = require("../object-values/Genero.js");

class User {
  constructor({ nome, idade, genero, habilitado }) {
    this.nome = new Nome(nome);
    this.idade = new Idade(idade);
    this.genero = new Genero(genero);
    this.habilitado = habilitado;
  }
}

module.exports = User;
