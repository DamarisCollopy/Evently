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
          type: Sequelize.INTEGER,
          onDelete:'CASCADE', 
          references: {model: 'Events', key: 'id'}
      },
      UserId: { 
         allowNull: false,
         type: Sequelize.STRING(250),
         onDelete:'CASCADE', 
         references: {model: 'Users', key: 'uuid'}
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