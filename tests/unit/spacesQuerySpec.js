const spacesQuery = require('../../src/spacesQuery');

describe('spaceQuery', () => {
  let Spaces;
  let space;
  let exampleSpace;
  let getReturns;

  beforeEach(() => {
    Spaces = {
      create() {},
      findAll() {}
    };

    space = {
      get() {}
    };

    exampleSpace = {
      spacesName: 'Jacks trunk',
      spacesDescr: 'A treehouse',
      spacesPrice: '3',
      startDate: '01/01/18',
      endDate: '02/01/18'
    };

    getReturns = {
      name: 'Jacks trunk',
      description: 'A treehouse',
      price: '3',
      fromDate: '01/01/18',
      toDate: '02/01/18'
    };
  });

  describe('createRow', () => {
    it('calls create', () => {
      spyOn(Spaces, 'create');
      spacesQuery.createRow(exampleSpace, Spaces);

      expect(Spaces.create).toHaveBeenCalledWith({
        name: 'Jacks trunk',
        description: 'A treehouse',
        price: '3',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      });
    });
  });

  describe('allRows', () => {
    it('calls findAll', async () => {
      spyOn(space, 'get').and.callFake(columnName => getReturns[columnName]);
      spyOn(Spaces, 'findAll').and.returnValue(new Promise((resolve) => {
        resolve([space]);
      }));

      expect(await spacesQuery.allRows(Spaces)).toEqual([{
        name: 'Jacks trunk',
        description: 'A treehouse',
        price: '3',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      }]);
    });
  });
});
