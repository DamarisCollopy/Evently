'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [{
        uuid:'RvmJPvgRT8S6r6Cc75soY4bTA382',
        firstName: 'Julia',
        lastName: 'Penedo',
        email:'julia@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        uuid:'lLbI1EfaLpRg17QGpwbQHND5bBC2',
        firstName: 'Ana',
        lastName: 'Souza',
        email:'anasouza@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
