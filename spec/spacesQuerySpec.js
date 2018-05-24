// describe('spacesQuery', function () {
//   var spacesQuery = require('../src/spacesQuery')
//
//   beforeEach(function() {
//   })
//
// //   describe('allRows', function () {
// //     it('Should return an array of spaces', function() {
// //       spacesQuery.createRow('Bobs hovel');
// //       console.log(spacesQuery)
// //       console.log(spacesQuery.allRows())
// //       console.log(spacesQuery.allRows[0])
// //     })
// //   })


describe("createRow", function() {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces

  beforeEach(function() {
    Spaces = {
      create: function(spaceName) {}
    };
    spyOn(Spaces, 'create');
  });


  it('Creates a row', function() {
    spacesQuery.createRow('Homeless Jims Cabin of Love', Spaces)
    expect(Spaces.create).toHaveBeenCalled();
  });
});

describe("allRows", function() {
  var spacesQuery = require('../src/spacesQuery')
  var Spaces
  var space

  beforeEach(function() {
    space = {
      get: function () {
        return 'Simple bobs dumpster'
      },
      then: function () {
        return "testing then"
      }
    }

    Spaces = {
      findAll: function() {
        return space
      },

      create: function(spaceName) {}
    };

    spyOn(Spaces, 'findAll');
  });

  it('Returns an array of spaces', function(){
    spacesQuery.allRows(Spaces)
    expect(Spaces.findAll).toHaveBeenCalled();
    expect(spacesQuery.allRows(Spaces)).toEqual(['Simple bobs dumpster']);
  });
});
