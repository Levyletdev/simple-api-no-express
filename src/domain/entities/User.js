const Nome = require("../object-values/Nome.js");
const Idade = require("../object-values/Idade.js");
const Genero = require("../object-values/Genero.js");
const Habilitado = require("../object-values/Habilitado.js");

class User {
  constructor({ nome, idade, genero, habilitado }) {
    this.nome = new Nome(nome).getNome()
    this.idade = new Idade(idade);
    this.genero = new Genero(genero);
    this.habilitado = new Habilitado(habilitado, idade);
  }
}

module.exports = User;
