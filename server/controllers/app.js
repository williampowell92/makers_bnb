const express = require('express')
const app = express()
const path = require('path')
const spacesQuery = require('../../src/spacesQuery')

//Settings
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express.static('public'))

//Server
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}`))

//Routes
app.get('/', async function (req, res) {
  res.render('index', { title: 'MakersBnB', spaces: await spacesQuery.allRows() })
  })

app.get('/spaces/new', function (req, res) {
  res.render('spaces_new')
})

app.post('/spaces', async function (req, res) {
  await spacesQuery.createRow(req.body)
  res.redirect('/')
})
