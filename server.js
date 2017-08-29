const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const app = express();


app.get('/', (request, response) => {
  response.render('views/layout');
});

app.listen(3007, () => {
  console.log("Product Hunt arrive sur le port 3007");
});
