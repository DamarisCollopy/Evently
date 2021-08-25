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
      Events.belongsTo(models.Activities),
      Events.belongsToMany(models.Users, { through: 'UsersActivities' })
    }
  };
  Events.init({
    day: DataTypes.DATEONLY,
    endTime: DataTypes.DATEONLY,
    starTime: DataTypes.DATEONLY,
    maxParticipants: DataTypes.INTEGER,
    numbParticipants: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    waitEvent: DataTypes.BOOLEAN,
    confirmEvent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};