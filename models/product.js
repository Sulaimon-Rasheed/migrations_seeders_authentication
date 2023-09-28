const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const { v4: uuidv4 } = require('uuid');

const Product = sequelize.define(
  "Product",
  {
      _id: {
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