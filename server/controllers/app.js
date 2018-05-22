const express = require('express')
const app = express()

var testArray = [1, 2, 3, 4, 5]
app.set('view engine', 'pug')
app.listen(3000, () => console.log('example app listening on port 3000!'))

app.get('/', function (req, res) {
  res.render('index', { title: 'MakersBnB', array: testArray })
})

app.post('/spaces/new', function (req, res) {
  res.redirect('/')
})