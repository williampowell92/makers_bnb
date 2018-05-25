'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Spaces',[
      {
        name: 'Will\'s flat',
        description: '10 bedroom studio',
        createdAt : new Date(),
        updatedAt : new Date()
    },
      {
        name: 'Igor\'s house',
        description: 'Subterannean villa',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Rob\'s castle',
        description: '1 bedroom castle',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Sam\'s mansion',
        description: 'Playgirl mansion',
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
