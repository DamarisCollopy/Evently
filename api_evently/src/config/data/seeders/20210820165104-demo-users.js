'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [{
        uuid:'33333333333',
        firstName: 'John',
        lastName: 'Oliveira',
        email:'jose@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        uuid:'11111111111',
        firstName: 'Bia',
        lastName: 'Costa',
        email:'bia@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        uuid:'22222222222',
        firstName: 'Antonio',
        lastName: 'Pereira',
        email:'antonio@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        uuid:'55555555555',
        firstName: 'Pedro',
        lastName: 'Conseicao',
        email:'pedro@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        uuid:'44444444444',
        firstName: 'Luiza',
        lastName: 'Santos',
        email:'luiza@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
