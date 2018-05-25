describe('spaceQuery', function () {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces
  var space
  var example
  var getValues

  beforeEach(function () {
    example = {
      spacesName: 'Homeless Jims Cabin of Love',
      startDate: '01/01/18',
      endDate: '02/01/18'
    }

    getValues = {
      name: 'Homeless Jims Cabin of Love',
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
        name: 'Homeless Jims Cabin of Love',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      });
    });


  })

  describe('allRows', function () {
    it('calls findAll', async function () {
      spyOn(space, 'get').and.callFake(function (value) {
        return getValues[value]
      })
      spyOn(Spaces, 'findAll').and.returnValue(new Promise(function (resolve, reject) {
        resolve([space])
      }))
      expect(await spacesQuery.allRows(Spaces)).toEqual([{
        name: 'Homeless Jims Cabin of Love',
        fromDate: '01/01/18',
        toDate: '02/01/18'
      }])
    })
  })
})
