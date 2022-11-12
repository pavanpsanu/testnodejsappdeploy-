//from generator
var createError = require('http-errors');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')
var bodyParser = require('body-parser')
const express = require('express')


const app = express()
const port = 80

app.use(cors())


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const http = require('http');

// app.use(function(req, res, next) {
//   next(createError(404));
// });

'use strict';

app.use(express.static(__dirname +"/frontend/"));


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

headers: true

//api for html render 
app.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/frontend/index.html")
	
});


const responseData = {
    message:"Hello, sanu , api s working"
  }
  
  app.get('/getdata', function(req, res, next) {
    const jsonContent = JSON.stringify(responseData);
    res.end(jsonContent);
    // res.send('respond with a resource');
  });

module.exports = app;

