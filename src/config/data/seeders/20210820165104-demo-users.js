'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('users', [{
        Identifier:'33333333333',
        firstName: 'John',
        lastName: 'Oliveira',
        email:'jose@email.com',
        birthDate:'2000-12-31',
        street:'rua do ouvidor',
        neighborhood:'Centro',
        city:'Rio de Janeiro',
        zipCode:'20040970',
        password:'12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        Identifier:'11111111111',
        firstName: 'Bia',
        lastName: 'Costa',
        email:'bia@email.com',
        birthDate:'1995-11-15',
        street:'rua Teresa Cristina',
        neighborhood:'Santa Cruz',
        city:'Rio de Janeiro',
        zipCode:'23515030',
        password:'12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        Identifier:'22222222222',
        firstName: 'Antonio',
        lastName: 'Pereira',
        email:'antonio@email.com',
        birthDate:'1988-04-02',
        street:'rua peixoto gomide',
        neighborhood:'Jardim Paulista',
        city:'Sao Paulo',
        zipCode:'01409001',
        password:'12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        Identifier:'55555555555',
        firstName: 'Pedro',
        lastName: 'Conseicao',
        email:'pedro@email.com',
        birthDate:'1982-03-02',
        street:'rua castro alves aclimação',
        neighborhood:'Aclimação',
        city:'Sao Paulo',
        zipCode:'01532001',
        password:'12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        Identifier:'44444444444',
        firstName: 'Luiza',
        lastName: 'Santos',
        email:'luiza@email.com',
        birthDate:'1945-06-15',
        street:'rua castro alves aclimação',
        neighborhood:'Jardim Varginha',
        city:'Sao Paulo',
        zipCode:'04857043',
        password:'12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
