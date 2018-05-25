describe('spaceQuery', function () {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces
  var space
  var example

  beforeEach(function () {
    example = {
      spaceName: 'Homeless Jims Cabin of Love',
      fromDate: '01/01/18',
      toDate: '02/01/18'
    }

    Spaces = {
      create: function (example) {},
      findAll: function () {}
    }

    space = {
      get: function () {}
    }
  })

  describe('createRow', function () {
    it('calls create', function() {
      spyOn(Spaces, 'create')
      spacesQuery.createRow(example, Spaces)
      expect(Spaces.create).toHaveBeenCalledWith({
        name: example['spaceName'],
        fromDate: example['fromDate'],
        toDate: example['toDate']
      });
    });


  })

  describe('allRows', function () {
    it('calls findAll', async function () {
      spyOn(space, 'get').and.returnValue('string')
      spyOn(Spaces, 'findAll').and.returnValue(new Promise(function (resolve, reject) {
        resolve([space])
      }))
      expect(await spacesQuery.allRows(Spaces)).toEqual(['string'])
    })
  })
})
