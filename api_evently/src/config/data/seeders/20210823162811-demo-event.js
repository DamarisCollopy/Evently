'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [{
      name: 'Evento1',
      day:new Date(),
      starTime: '12:00',
      endTime:'15:00',
      maxParticipants:'12',
      numbParticipants:'12',
      neighborhood:'Centro',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      event: 'Voley',
      userId: 'RvmJPvgRT8S6r6Cc75soY4bTA382',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Evento2',
      day:new Date(),
      starTime: '12:00',
      endTime:'15:00',
      maxParticipants:'6',
      numbParticipants:'4',
      neighborhood:'Centro',
      city:'Rio de Janeiro',
      waitEvent: true,
      confirmEvent: false,
      event: 'Xadrez',
      userId: 'RvmJPvgRT8S6r6Cc75soY4bTA382',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Evento3',
      day:new Date(),
      starTime: '12:00',
      endTime:'15:00',
      maxParticipants:'24',
      numbParticipants:'14',
      neighborhood:'Santa Tereza',
      city:'Rio de Janeiro',
      waitEvent: true ,
      confirmEvent: false,
      event: 'Futebol',
      userId: 'RvmJPvgRT8S6r6Cc75soY4bTA382',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Evento4',
      day:new Date(),
      starTime: '12:00',
      endTime:'15:00',
      maxParticipants:'12',
      numbParticipants:'12',
      neighborhood:'Barra da Tijuca',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      event: 'Baskete',
      userId: 'lLbI1EfaLpRg17QGpwbQHND5bBC2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Evento5',
      day:new Date(),
      starTime: '12:00',
      endTime:'15:00',
      maxParticipants:'22',
      numbParticipants:'22',
      neighborhood:'Barra da Tijuca',
      city:'Rio de Janeiro',
      waitEvent: false,
      confirmEvent: true,
      event: 'Futbool Americano',
      userId: 'lLbI1EfaLpRg17QGpwbQHND5bBC2',
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
