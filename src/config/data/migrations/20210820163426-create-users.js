
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      identifier: { 
        allowNull: false,
        type: Sequelize.STRING(11), 
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
      birthDate: {
        type: Sequelize.DATEONLY
      },
      street: {
        type: Sequelize.STRING(50)
      },
      neighborhood: {
        type: Sequelize.STRING(50)
      },
      city: {
        type: Sequelize.STRING(50)
      },
      zipCode: {
        type: Sequelize.STRING(8)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
      password: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};