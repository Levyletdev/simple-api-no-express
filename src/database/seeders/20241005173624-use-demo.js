"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        { nome: "João", genero: "Masculino", idade: 25, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Maria", genero: "Feminino", idade: 30, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Pedro", genero: "Masculino", idade: 22, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Ana", genero: "Feminino", idade: 28, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Lucas", genero: "Masculino", idade: 35, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Julia", genero: "Feminino", idade: 19, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Carlos", genero: "Masculino", idade: 40, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Fernanda", genero: "Feminino", idade: 33, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Ricardo", genero: "Masculino", idade: 27, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Larissa", genero: "Feminino", idade: 24, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Tiago", genero: "Masculino", idade: 29, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Gabriela", genero: "Feminino", idade: 26, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Rafael", genero: "Masculino", idade: 32, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Paula", genero: "Feminino", idade: 31, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Gustavo", genero: "Masculino", idade: 36, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Beatriz", genero: "Feminino", idade: 21, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Felipe", genero: "Masculino", idade: 38, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Bruna", genero: "Feminino", idade: 23, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Diego", genero: "Masculino", idade: 20, habilitado: true, createdAt: new Date(), updatedAt: new Date() },
        { nome: "Renata", genero: "Feminino", idade: 37, habilitado: false, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
