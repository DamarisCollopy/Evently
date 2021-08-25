'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usersActivities', [{
      name: 'Pelada com amigos',
      EventId: '1',
      UserId: '55555555555',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Xadrez bom de mais',
      EventId: '2',
      UserId: '11111111111',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Voley profissional',
      EventId: '3',
      UserId: '22222222222',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Tennis entre 4 e melhor',
      EventId: '4',
      UserId: '33333333333',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Futebo Americano',
      EventId: '5',
      UserId: '44444444444',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
