const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const user = require('./routes/user');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': false
}));

app.use('/', user);

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'default'
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});