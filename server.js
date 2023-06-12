const express = require('express');
const path = require('path');

const minesweeperImprovements = require('./data/minesweeper-improvements');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    res.redirect('/goals');
});
app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/goals', function(req, res) {
    res.render('goals/index', {
        goals: minesweeperImprovements.getAll()
    });
});
app.listen(1234, function() {
    console.log('Listening on port 1234');
});