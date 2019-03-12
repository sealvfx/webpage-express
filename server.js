const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(__dirname + '/views/parcials'); // Partial HTML elements (templates)
app.set('view engine', 'hbs');

app.get('/', (req, res) => {res.render('home')});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.listen(port, () => console.log(`Listening on port ${port}`));
