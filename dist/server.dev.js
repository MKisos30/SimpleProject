"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 1234;
app.use(express["static"]("public")); //public folder
//EJS

app.set('view engine', 'ejs'); //connecting ejs

console.log(app.get('view engine')); //ROUTER

var index = require('./router');

var about = require('./router/about');

var places = require('./router/places');

app.use('/', index);
app.use('/about', about);
app.use('/', places);
app.listen(PORT, function () {
  console.log("listner on http://localhost:".concat(PORT));
});