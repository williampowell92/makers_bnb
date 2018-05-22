const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.listen(3000, () => console.log('example app listening on port 3000!'));
app.get('/', (req, res) => res.render('index', { title: 'Hey', message: 'Hello World' }));
