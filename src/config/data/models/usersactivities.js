'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersActivities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UsersActivities.hasMany(models.Events)
      UsersActivities.hasOne(models.Users)
    }
  };
  UsersActivities.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersActivities',
  }); 
  return UsersActivities;
};