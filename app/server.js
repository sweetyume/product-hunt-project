const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/index');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(router);

app.listen(8009, () => {
  console.log("Product Hunt arrive sur le port 8009");
});
