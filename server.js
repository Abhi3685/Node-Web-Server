const express = require('express');
const hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;

hbs.registerPartials('views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: "Welcome to the homepage."
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "About Page"
  });
});

app.get('/help', (req, res) => {
  res.render('help.hbs', {
    pageTitle: "Help Page"
  });
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs', {
    pageTitle: "Contact us"
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});