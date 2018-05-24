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
//   describe('createRow', function() {
//     it('Creates a row', function () {
//       console.log(1)
//       // var Spaces = jasmine.createSpyObj('Spaces', ['create'])
//       var Spaces = {
//         create: function (spaceName) {}
//       }
//       spyOn(Spaces, 'create')
//       console.log(2)
//       console.log(Spaces)
//       // spacesQuery.createRow('Bobs hovel');
//       console.log(3)
//       console.log(Spaces)
//       var Spaces = jasmine.createSpyObj('Spaces', ['create'])
//       Spaces.create()
//
//       expect(Spaces.create()).toHaveBeenCalled();
//       console.log(4)
//     })
//   })
// })

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
