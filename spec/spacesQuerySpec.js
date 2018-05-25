describe('spaceQuery', function () {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces
  var space
  var exampleSpace
  var getReturns

  beforeEach(function () {
    Spaces = {
      create: function (space) {},
      findAll: function () {}
    }

    space = {
      get: function () {}
    }

    exampleSpace = {
      spacesName: 'Jacks trunk',
      spacesDescr: 'A treehouse',
      spacesPrice: '3',
      startDate: '01/01/18',
      endDate: '02/01/18'
    }

    getReturns = {
      'name': 'Jacks trunk',
      'description': 'A treehouse',
      'price': '3',
      'fromDate': '01/01/18',
      'toDate': '02/01/18'
    }
  })

  describe('createRow', function () {
    it('calls create', function() {
      spyOn(Spaces, 'create')
      spacesQuery.createRow(exampleSpace, Spaces)
      expect(Spaces.create).toHaveBeenCalledWith({
        name: 'Jacks trunk',
        description: 'A treehouse',
        price: '3',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      });
    });
  })

  describe('allRows', function () {
    it('calls findAll', async function () {
      spyOn(space, 'get').and.callFake(function (columnName) {
        return getReturns[columnName]
      })
      spyOn(Spaces, 'findAll').and.returnValue(new Promise(function (resolve, reject) {
        resolve([space])
      }))
      expect(await spacesQuery.allRows(Spaces)).toEqual([{
        name: 'Jacks trunk',
        description: 'A treehouse',
        price: '3',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      }])
    })
  })
})
