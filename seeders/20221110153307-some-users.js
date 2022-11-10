'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        fullName: "Bob",
        email: "b@b.com",
        password: "bob123", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Alice",
        email: "a@a.com",
        password: "alice123", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Joe",
        email: "jo@jo.com",
        password: "joe123", 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullName: "Jane",
        email: "ja@ja.com",
        password: "jane123", 
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
