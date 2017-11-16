'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
