var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors')
const http = require('http');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const port = 80
var app = express();

// view engine setup





app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });
app.set('view engine', 'html');

app.use(bodyParser.json());
// app.use(express.static(process.cwd()+"../myExpressApp/views/testapp1/dist/testapp1"));
app.use(express.static(__dirname +"/frontend/app1test/dist/app1test"));

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+"/frontend/app1test/dist/app1test/index.html")
	
});


const responseData = {
  message:"Hello, sanu , api s working"
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  const jsonContent = JSON.stringify(responseData);
  res.end(jsonContent);
  // res.send('respond with a resource');
});


// const httpServer = http.createServer(app);

// httpServer.listen(port, () => {
// 	console.log('HTTPS Server running on port 80');
// });




module.exports = app;
