'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("images", [
      {
        title: "Bob",
        url: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Alice",
        url: "https://neilpatel.com/wp-content/uploads/2019/06/camera-profissional-apontada-para-paisagem.jpeg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Joe",
        url: "https://talentosbrasil.com.br/uploads/cursos/fotografia.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Jane",
        url: "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
