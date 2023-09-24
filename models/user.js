const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")
const { v4: uuidv4 } = require('uuid');

const User = sequelize.define("User", {
        user_id:{
          type: DataTypes.UUID,
          defaultValue:uuidv4(),
          unique: true,
          primaryKey: true
        },
        username:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        }, 
        password:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        email:{
          type:DataTypes.STRING,
          unique: true,
          allowNull: false,
        },
        phone_number:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        gender:{
          type:DataTypes.ENUM,
          values:["male", "female"],
        },
        address:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        city:{
          type:DataTypes.STRING,
          allowNull:false,
        },
        state:{
          type:DataTypes.STRING,
          allowNull:false,
        },
        country:{
          type:DataTypes.STRING,
          allowNull:false,
        },
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
    modelName: 'User',
 }
 )

 module.exports = User





















 // 'use strict';
// const {Model} = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id:{
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       unique: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     username:{
//       type:DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     }, 
//     password:{
//       type:DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     email:{
//       type:DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//     address:{
//       type:DataTypes.STRING,
//       allowNull: false,
//     },
//     phone_number:{
//       type:DataTypes.STRING,
//       allowNull: false,
//     },
//     gender:{
//       type:DataTypes.ENUM,
//       values:["male", "female"],
//     },
//     createdAt: {
//       type: DataTypes.DATE
//     },
//     updatedAt: {
//       type: DataTypes.DATE
//     }
//   }, {
//     timestamps:true,
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };