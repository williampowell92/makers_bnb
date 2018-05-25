'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces',[
      {
        name: 'Will\'s flat',
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
    },
      {
        name: 'Igor\'s house',
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Rob\'s castle',
        fromDate: '01/01/18',
        toDate: '02/01/18',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Sam\'s mansion',
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
