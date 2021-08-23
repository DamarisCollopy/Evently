'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UsersActivities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING(50)
      },
      EventId: { 
        allowNull: false,
        type: Sequelize.Integer,
        onDelete:'CASCADE', 
        references: {model: 'Events', key: 'id'}
      },
      UserId: { 
        allowNull: false,
        type: Sequelize.STRING(11),
        onDelete:'CASCADE', 
        references: {model: 'Users', key: 'id'}
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
    await queryInterface.dropTable('UsersActivities');
  }
};