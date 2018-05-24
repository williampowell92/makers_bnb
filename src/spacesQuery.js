const Spaces = require('../server/models/index').Spaces

module.exports = {
  allRows: async function (spaces = Spaces) {
    var array = []
    await spaces
      .findAll()
      .then(function (spaces) {
        spaces.forEach(function (space) {
          console.log(space
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
