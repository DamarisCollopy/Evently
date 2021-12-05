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
    
    }
  };
  UsersActivities.init({
    Name: DataTypes.STRING,
    EventId: DataTypes.INTEGER,
    UserId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UsersActivities',
  }); 
  return UsersActivities;
};