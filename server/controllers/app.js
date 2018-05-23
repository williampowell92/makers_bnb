const express = require('express')
const app = express()
const Spaces = require('../models/index').Spaces

//Settings
app.use(express.urlencoded())
app.set('view engine', 'pug')

//Server
app.listen(3000, () => console.log('Server listening on port 3000'))

//Routes
app.get('/', async function (req, res) {
  var spacesArray = []
  await Spaces.findAll().then(spaces => {
    spaces.forEach(function (space) {
      spacesArray.push(space.get('name'))
    })
  })

  res.render('index', { spaces: spacesArray })
})

app.post('/spaces/new', async function (req, res) {
  await Spaces.create({
    name: req.body.spaces
  })

  res.redirect('/')
})
