'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
var port = process.env.PORT || 5432;

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

app.post('/whichequipment', (req, res) => {
  if (req.body.yesno == "yes") {
    res.render('whicheq');
  }
  else {
    res.redirect(307, 'percentages');
  }
});


app.post('/percentages', (req, res) => {
  res.locals.left = [];
  var minus = 0;
  if (req.body.which == "balls") {
    minus = 4;
  } else if (req.body.which == "bat") {
    minus = 13;
  } else if (req.body.which == "both") {
    minus = 17;
  }
  var left = 130 - minus;
  res.render('percentages', {
    helpers: {
      left: function () { return left; }
    }
  });
});

app.post('/thanks', (req, res) => {
  res.render('thanks');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
