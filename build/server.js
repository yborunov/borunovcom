"use strict";
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');
app.listen(app.get('port'), function () {
    console.log('The app is listening on port: ' + app.get('port'));
});
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index.ejs');
});
app.get('/about', function (req, res) {
    res.redirect('/');
});
app.get('/work', function (req, res) {
    res.render('work.ejs');
});
app.get('/projects', function (req, res) {
    res.render('projects.ejs');
});
app.get('/skills', function (req, res) {
    res.render('skills.ejs');
});
app.use(function (req, res) {
    res.send(404);
});
