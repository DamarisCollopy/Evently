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
      endTime: {
        type: Sequelize.DATEONLY
      },
      starTime: {
        type: Sequelize.DATEONLY
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
      ActivityId: { 
        allowNull: false,
        type: Sequelize.INTEGER, 
        references: {model: 'Activities', key: 'id'},
        onDelete:'CASCADE'
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