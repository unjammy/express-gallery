const express = require('express');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const helpers = require('./public/lib/helpers.js');

const db = require('./models');
const index = require('./routes/index.js');
const gallery = require('./routes/gallery.js');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  helpers: helpers,
  partialsDir: [
    'views/partials/'
  ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded() );

app.use('/', index);
app.use('/gallery', gallery);

db.sequelize.sync();

app.listen(3000, function(){
  console.log('server listening on port 3000');
});

module.exports = app;