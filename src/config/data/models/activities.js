'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activities.hasMany(models.Events)
    }
  };
  Activities.init({
    activityName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activities',
  });
  
  return Activities;
};