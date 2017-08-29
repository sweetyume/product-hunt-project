const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));


app.set('views', path.join(__dirname, 'app/public/views'));
app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, 'public'))); // express.static pour les dossiers statics = public

// ROUTES
// ========================================
app.get('/', (request, response) => {
  // response.send('hello');
  response.render('layout');
});

app.listen(8009, () => {
  console.log('views', path.join(__dirname, 'views'));
  console.log("Product Hunt arrive sur le port 8009");
});
