describe('spaceQuery', function () {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces

  beforeEach(function () {
    Spaces = {
      create: function (spaceName) {},
      findAll: function () {}
    }

    space = {
      get: function () {}
    }
  })

  describe('createRow', function () {
    it('calls create', function() {
      spyOn(Spaces, 'create')
      spacesQuery.createRow('Homeless Jims Cabin of Love', Spaces)
      expect(Spaces.create).toHaveBeenCalledWith({
        name: 'Homeless Jims Cabin of Love'
      });
    })
  })

  describe('allRows', function () {
    it('calls findAll', function () {
      spyOn(space, 'get').and.returnValue('string')
      spyOn(Spaces, 'findAll').and.returnValue(new Promise(function (resolve, reject) {
        resolve([space])
      }))
      spacesQuery.allRows(Spaces)
      expect(Spaces.findAll).toHaveBeenCalled()
      expect(spacesQuery.allRows(Spaces)).toEqual(['string'])
    })
  })
})
//
//
//
//
// describe("createRow", function() {
//   var spacesQuery = require('../src/spacesQuery')
//   var Spaces
//
//   beforeEach(function() {
//     Spaces = {
//       create: function(spaceName) {}
//     };
//     spyOn(Spaces, 'create');
//   });
//
//
//   it('Creates a row', function() {
//     spacesQuery.createRow('Homeless Jims Cabin of Love', Spaces)
//     expect(Spaces.create).toHaveBeenCalled();
//   });
// });
//
// describe("allRows", function() {
//   var spacesQuery = require('../src/spacesQuery')
//   var Spaces
//   var space
//
//   beforeEach(function() {
//     space = {
//       get: function () {
//         return 'Simple bobs dumpster'
//       },
//       then: function () {
//         return "testing then"
//       }
//     }
//
//
//
//     spyOn(Spaces, 'findAll');
//   });
//
//   it('Returns an array of spaces', function(){
//     spacesQuery.allRows(Spaces)
//     expect(Spaces.findAll).toHaveBeenCalled();
//     expect(spacesQuery.allRows(Spaces)).toEqual(['Simple bobs dumpster']);
//   });
// });
