const express = require('express')
const app = express()


//Settings
app.use(express.urlencoded())
app.set('view engine', 'pug')

//Server
app.listen(3000, () => console.log('example app listening on port 3000!'))


//Test Stuff
var testArray = [1, 2, 3, 4, 5]
var testDisplay

//Routes

app.get('/', function (req, res) {
  res.render('index', { title: 'MakersBnB', array: testArray, displayTest: testDisplay })
})

app.post('/spaces/new', function (req, res) {
  testDisplay = req.body.spaces     // your JSON
  // res.send(req.body)
  res.redirect('/')
})