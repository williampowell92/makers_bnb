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
      spacesPrice: '3'
    }

    getReturns = {
      'name': 'Jacks trunk',
      'description': 'A treehouse',
      'price': '3'
    }
  })

  describe('createRow', function () {
    it('calls create', function() {
      spyOn(Spaces, 'create')
      spacesQuery.createRow(exampleSpace, Spaces)
      expect(Spaces.create).toHaveBeenCalledWith({
        name: 'Jacks trunk',
        description: 'A treehouse',
        price: '3'
      });
    })
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
        price: '3'
      }])
    })
  })
})
