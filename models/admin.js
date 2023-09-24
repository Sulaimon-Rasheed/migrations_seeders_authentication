const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")
const { v4: uuidv4 } = require('uuid');

const Admin = sequelize.define("Admin", {
        admin_id:{
          type: DataTypes.UUID,
          defaultValue:uuidv4(),
          unique: true,
          primaryKey: true
        },
        email:{
          type:DataTypes.STRING,
          allowNull: false,
          unique:true
        }, 
        firstName:{
          type:DataTypes.STRING,
          allowNull: false,
        }, 
        lastName:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        // userId: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   references:{
        //     model:"User",
        //     key:"userId"
        //   },
        // },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      },
 {
    timestamps:true,
    sequelize,
    modelName: 'Admin',
 }
 )

 module.exports = Admin


























 // 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Admin extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Admim.init({
//     id: DataTypes.INTEGER,
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Admin',
//   });
//   return Admin;
// };