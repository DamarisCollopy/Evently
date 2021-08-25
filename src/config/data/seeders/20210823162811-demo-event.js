'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [{
      day:new Date(),
      endTime: '2021-08-12',
      starTime:'2021-08-12',
      maxParticipants:'12',
      numbParticipants:'12',
      neighborhood:'Centro',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      ActivityId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      day:new Date(),
      endTime: '2021-09-12',
      starTime:'2021-09-12',
      maxParticipants:'6',
      numbParticipants:'4',
      neighborhood:'Centro',
      city:'Rio de Janeiro',
      waitEvent: true,
      confirmEvent: false,
      ActivityId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      day:new Date(),
      endTime: '2021-10-12',
      starTime:'2021-10-12',
      maxParticipants:'24',
      numbParticipants:'14',
      neighborhood:'Santa Tereza',
      city:'Rio de Janeiro',
      waitEvent: true ,
      confirmEvent: false,
      ActivityId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      day:new Date(),
      endTime: '2021-11-12',
      starTime:'2021-11-12',
      maxParticipants:'12',
      numbParticipants:'12',
      neighborhood:'Barra da Tijuca',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      ActivityId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      day:new Date(),
      endTime: '2022-06-12',
      starTime:'2022-06-12',
      maxParticipants:'22',
      numbParticipants:'22',
      neighborhood:'Barra da Tijuca',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      ActivityId: '5',
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
