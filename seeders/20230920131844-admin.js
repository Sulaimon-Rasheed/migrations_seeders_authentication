'use strict';

/** @type {import('sequelize-cli').Migration} */
const fields = [
  {
    email:"get4me@gmail.com",
    firstName:"kenhinde",
    lastName:"Adeyanju",
    user_id:"dc4d48b9-d53e-4205-97f5-d116c4e9082a",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins",fields)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("admins", {
      email:"get@gmail.com"
    })
  }
};
