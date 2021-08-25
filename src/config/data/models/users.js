const bcrypt = require("bcrypt")

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Events, { through: 'UsersActivities'})
    }
  };
  Users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    birthDate: DataTypes.DATEONLY,
    street: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    Identifier: {
      type :  DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    // freezeTableName: true,
    // instanceMethods: {
    //     generateHash(password) {
    //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //     },
    //     validPassword(password) {
    //         return bcrypt.compare(password, this.password);
    //     }
    // }
  });
  return Users;
};