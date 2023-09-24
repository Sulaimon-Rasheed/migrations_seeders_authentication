'use strict';
const { v4: uuidv4 } = require('uuid');
uuidv4();
/** @type {import('sequelize-cli').Migration} */


module.exports = {
   up(queryInterface, Sequelize) {
    return queryInterface.createTable('Admins', {
      admin_id: {
        unique:true,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:uuidv4()
      },
      email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      firstName: {                     //migrations/20230911231904-create-admin.js
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references:{
      //     model:"User",
      //     key:"userId"
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Admins');
  }
};