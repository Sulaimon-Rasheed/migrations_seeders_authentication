const {Sequelize, DataTypes} = require("sequelize")
const sequelize = require("../config/sequelize")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt")

const User = sequelize.define("User", {
          _id:{
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

 User.beforeCreate((user, option) => {

  return bcrypt.hash(user.password, 10)
      .then(hash => {
          user.password = hash;
      })
      .catch(err => { 
          throw new Error(); 
      });
});

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

 

 module.exports = User