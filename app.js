var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var md_sdRouter = require('./routes/md_get_sortdata');//
var md_alRouter = require('./routes/md_get_allids');//
var md_dRouter = require('./routes/md_get_data');//
var app = express();


// import createError  from 'http-errors';
// import express  from 'express';
// import path  from 'path';
// import cookieParser  from'cookie-parser';
// import logger from 'morgan';

// import indexRouter  from './routes/index';
// import usersRouter  from './routes/users';
// import md_sdRouter from './routes/md_get_sortdata';//
// import md_alRouter from './routes/md_get_allids';//
// import md_dRouter  from './routes/md_get_data.js';//
//var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/md_get_sortdata',md_sdRouter);//
app.use('/md_get_allids',md_alRouter);//
app.use('/md_get_data',md_dRouter);//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
