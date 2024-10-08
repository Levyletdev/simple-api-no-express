const Nome = require("../object-values/Nome.js");
const Idade = require("../object-values/Idade.js");
const Genero = require("../object-values/Genero.js");
const Habilitado = require("../object-values/Habilitado.js");

class User {
  constructor({ nome, idade, genero, habilitado }) {
    this.nome = new Nome(nome).toString();
    this.idade = new Idade(idade).toString();
    this.genero = new Genero(genero).toString();
    this.habilitado = new Habilitado(habilitado, idade).toString();
  }
}

module.exports = User;
