const express = require('express');
const spacesQuery = require('../../src/spacesQuery');

const app = express();

app.use(express.urlencoded());
app.set('view engine', 'pug');
app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get('/', async (req, res) => {
  res.render('index', { title: 'MakersBnB', spaces: await spacesQuery.allRows() });
});

app.get('/spaces/new', (req, res) => {
  res.render('spaces_new');
});

app.post('/spaces', async (req, res) => {
  await spacesQuery.createRow(req.body);
  res.redirect('/');
});
