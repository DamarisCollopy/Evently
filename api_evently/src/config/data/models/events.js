'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Events.belongsTo(models.Activities),
      Events.belongsToMany(models.Users, { through: 'UsersActivities' })
    }
  };
  Events.init({
    name: DataTypes.STRING,
    day: DataTypes.DATEONLY,
    starTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    maxParticipants: DataTypes.INTEGER,
    numbParticipants: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    waitEvent: DataTypes.BOOLEAN,
    confirmEvent: DataTypes.BOOLEAN,
    event: DataTypes.STRING,
    userId:  DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};