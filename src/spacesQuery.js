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
            fromDate: space.get('fromDate'),
            toDate: space.get('toDate')
          })
        })
      })
    return array
  },
  createRow: async function (reqBody, spaces = Spaces) {
    await spaces
      .create({
        name: reqBody.spacesName,
        fromDate: reqBody.startDate,
        toDate: reqBody.endDate
      })
  }
}
