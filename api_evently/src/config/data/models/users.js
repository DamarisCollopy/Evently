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
    uuid: {
      type :  DataTypes.STRING,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};