const Spaces = require('../server/models/index').Spaces

module.exports = {
  allRows: async function (spaces = Spaces) {
    var array = []
    await spaces
      .findAll()
      .then(function (spaces) {
        spaces.forEach(function (space) {
          array.push(space.get('name'))
        })
      })
    return array
  },
  createRow: async function (values, spaces = Spaces) {
    await spaces
      .create({
        name: values.spaceName,
        fromDate: values.fromDate,
        toDate: values.toDate
      })
  }
}
