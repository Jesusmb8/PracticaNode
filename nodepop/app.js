var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var anunciosRouter = require('./routes/api/anuncios');

// Conexión con BBDD
require('./lib/connectMongoose');

var app = express();

// Variables globales
app.locals.title ="Nodepop by Jesús";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('x-powered-by', false);


app.use(logger('dev'));
// Parámetros a través de JSON
app.use(express.json());
// Parametros a través de form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Montamos el router de anuncios
app.use("/api/anuncios", anunciosRouter);
// Montamos el mismo pero distinto endpoint
// Utilizamos misma query, modificamos sólo la respuesta
app.use("/anuncios", anunciosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  // Si es por la api, enviamos el error en json
  if (req.originalUrl.startsWith('/api/')) {
    res.json({
      error: err.message,
      detail: err.detail
    });
    return;
  }

  res.render('error');
});

module.exports = app;
