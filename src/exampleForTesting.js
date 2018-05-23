module.exports = {

  allRows: async function () {
    const db = require('../server/models/index')
    this.SPACES = db.Spaces
    var array = []
    await this.SPACES
      .findAll()
      .then(function (spaces) {
        spaces.forEach(function (space) {
          array.push(space.get('name'))
        })
      })
    return array
  }
}
