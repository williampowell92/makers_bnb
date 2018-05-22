const Spaces = require('./server/models/index').Spaces

Spaces.findOne().then(space => {
  console.log(space.get('name'));
});

Spaces.create({
  name: "Will's flat"
})

Spaces.findAll().then(spaces => {
  spaces.forEach(function (space) {
    console.log(space.get('id'), space.get('name'))
  })
})
