'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('activities', [{
      activityName: 'Futebool',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      activityName: 'Xadrez',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      activityName: 'Voley',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      activityName: 'Tennis',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      activityName: 'Futebo Americano',
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
