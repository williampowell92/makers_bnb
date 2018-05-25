'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces',[
      {
        name: 'Will\'s flat',
        description: '10 bedroom studio',
        price: 50,
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Igor\'s house',
        description: 'Subterranean villa',
        price: 3298234,
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Rob\'s castle',
        description: '1 bedroom castle',
        price: 12348,
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Sam\'s mansion',
        description: 'Playgirl mansion',
        price: 9,
        fromDate: '01/01/18',
        toDate: '02/01/18',
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
