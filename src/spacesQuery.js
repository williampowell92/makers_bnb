const Spaces = require('../server/models/index').Spaces

module.exports = {
  allRows: async function () {
    var array = []
    await Spaces
      .findAll()
      .then(function (spaces) {
        spaces.forEach(function (space) {
          array.push(space.get('name'))
        })
      })
    return array
  },
  createRow: function (spaceName) {
    Spaces
      .create({
        name: spaceName
      })
  }
}
