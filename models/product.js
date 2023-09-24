const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const { v4: uuidv4 } = require('uuid');

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      unique:true,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:uuidv4()
    },
    productName: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    size: DataTypes.INTEGER,
    color: DataTypes.STRING,
    quantityPerUnit: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: "Product",
  }
);

module.exports = Product;

























// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Product extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Product.init({
//     productName: DataTypes.STRING,
//     description: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     size: DataTypes.INTEGER,
//     color: DataTypes.STRING,
//     qoqntityPerUnit: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Product',
//   });
//   return Product;
// };
