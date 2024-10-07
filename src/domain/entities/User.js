const Nome = require("../object-values/Nome.js");
const Idade = require("../object-values/Idade.js");
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
