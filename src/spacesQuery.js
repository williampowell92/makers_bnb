const { Spaces } = require('../server/models/index');

module.exports = {
  allRows: async (spaces = Spaces) => {
    const array = [];
    await spaces
      .findAll()
      .then((allSpaces) => {
        allSpaces.forEach((space) => {
          array.push({
            name: space.get('name'),
            description: space.get('description'),
            price: space.get('price'),
            fromDate: space.get('fromDate'),
            toDate: space.get('toDate')
          });
        });
      });

    return array;
  },
  async createRow(space, spaces = Spaces) {
    await spaces
      .create({
        name: space.spacesName,
        description: space.spacesDescr,
        price: space.spacesPrice,
        fromDate: space.startDate,
        toDate: space.endDate
      });
  }
};
