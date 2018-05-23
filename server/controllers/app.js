const express = require('express')
const app = express()
const spacesQuery = require('../../src/spacesQuery')

//Settings
app.use(express.urlencoded())
app.set('view engine', 'pug')

//Server
app.listen(3000, () => console.log('example app listening on port 3000!'))

//Routes
app.get('/', async function (req, res) {
  res.render('index', { title: 'MakersBnB', spaces: await spacesQuery.allRows() })
  })

app.post('/spaces/new', function (req, res) {
  spacesQuery.createRow(req.body.spaces)
  res.redirect('/')
})
