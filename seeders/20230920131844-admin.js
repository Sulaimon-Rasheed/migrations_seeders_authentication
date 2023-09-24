'use strict';

/** @type {import('sequelize-cli').Migration} */
const fields = [
  {
    email:"get4me@gmail.com",
    firstName:"Moses",
    lastName:"Adeyanju",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins",fields)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("admins", {
      email:"get@gmail.com"
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
