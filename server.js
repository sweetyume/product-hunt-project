const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // express.static pour les dossiers statics = public


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// ROUTES
// ========================================
app.get('/home', (request, response) => {
  response.render('home');
});

app.listen(3007, () => {
  console.log("Product Hunt arrive sur le port 3007");
});
