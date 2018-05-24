const Spaces = require('../server/models/index').Spaces

module.exports = {
  allRows: async function (spaces = Spaces) {
    var array = []
    await spaces
      .findAll()
      console.log('-----------------------------')
      console.log(spaces.findAll())
      console.log('-----------------------------')
      .then(function (spaces) {
        console.log('-----------------------------')
        console.log(spaces)
        console.log('-----------------------------')
        spaces.forEach(function (space) {
          array.push(space.get('name'))
        })
      })
    return array
  },
  createRow: async function (spaceName, spaces = Spaces) {
    await spaces
      .create({
        name: spaceName
      })
  }
}
