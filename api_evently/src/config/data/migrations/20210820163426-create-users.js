
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      uuid: { 
        allowNull: false,
        type: Sequelize.STRING(250), 
        primaryKey: true 
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};