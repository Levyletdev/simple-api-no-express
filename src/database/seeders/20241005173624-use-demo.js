"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        { nome: "João", genero: "Masculino", idade: 25, habilitado: true },
        { nome: "Maria", genero: "Feminino", idade: 30, habilitado: false },
        { nome: "Pedro", genero: "Masculino", idade: 22, habilitado: true },
        { nome: "Ana", genero: "Feminino", idade: 28, habilitado: true },
        { nome: "Lucas", genero: "Masculino", idade: 35, habilitado: false },
        { nome: "Julia", genero: "Feminino", idade: 19, habilitado: true },
        { nome: "Carlos", genero: "Masculino", idade: 40, habilitado: true },
        { nome: "Fernanda", genero: "Feminino", idade: 33, habilitado: false },
        { nome: "Ricardo", genero: "Masculino", idade: 27, habilitado: true },
        { nome: "Larissa", genero: "Feminino", idade: 24, habilitado: true },
        { nome: "Tiago", genero: "Masculino", idade: 29, habilitado: false },
        { nome: "Gabriela", genero: "Feminino", idade: 26, habilitado: true },
        { nome: "Rafael", genero: "Masculino", idade: 32, habilitado: false },
        { nome: "Paula", genero: "Feminino", idade: 31, habilitado: true },
        { nome: "Gustavo", genero: "Masculino", idade: 36, habilitado: true },
        { nome: "Beatriz", genero: "Feminino", idade: 21, habilitado: true },
        { nome: "Felipe", genero: "Masculino", idade: 38, habilitado: false },
        { nome: "Bruna", genero: "Feminino", idade: 23, habilitado: true },
        { nome: "Diego", genero: "Masculino", idade: 20, habilitado: true },
        { nome: "Renata", genero: "Feminino", idade: 37, habilitado: false },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
