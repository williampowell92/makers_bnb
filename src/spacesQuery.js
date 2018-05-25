const Spaces = require('../server/models/index').Spaces

module.exports = {
  allRows: async function (spaces = Spaces) {
    var array = []
    await spaces
      .findAll()
      .then(function (spaces) {
        spaces.forEach(function (space) {
          array.push({
            name: space.get('name'),
            description: space.get('description'),
            price: space.get('price')
          })
        })
      })
    return array
  },
  createRow: async function (space, spaces = Spaces) {
    await spaces
      .create({
        name: space.spacesName,
        description: space.spacesDescr,
        price: space.spacesPrice
      })
  }
}
