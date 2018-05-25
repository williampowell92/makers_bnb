'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces',[
      {
        name: 'Will\'s flat',
        description: '10 bedroom studio',
        price: 50,
        createdAt : new Date(),
        updatedAt : new Date()
    },
      {
        name: 'Igor\'s house',
        description: 'Subterannean villa',
        price: 3298234,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Rob\'s castle',
        description: '1 bedroom castle',
        price: 12348,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Sam\'s mansion',
        description: 'Playgirl mansion',
        price: 9,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {})
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Spaces', null, {});
  }
}
