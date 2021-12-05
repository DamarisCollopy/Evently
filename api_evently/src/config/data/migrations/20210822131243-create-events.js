'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50)
      },
      day: {
        type: Sequelize.DATEONLY
      },
      starTime: {
        type: Sequelize.TIME
      },
      endTime: {
        type: Sequelize.TIME
      },
      maxParticipants: {
        type: Sequelize.INTEGER
      },
      numbParticipants: {
        type: Sequelize.INTEGER
      },
      neighborhood: {
        type: Sequelize.STRING(50)
      },
      city: {
        type: Sequelize.STRING(50)
      },
      waitEvent: {
        type: Sequelize.BOOLEAN
      },
      confirmEvent: {
        type: Sequelize.BOOLEAN
      },
      event: {
        type: Sequelize.STRING(50)
      },
      userId:{
        type: Sequelize.STRING(250)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};