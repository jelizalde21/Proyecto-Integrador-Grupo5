var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detailRouter = require('./routes/detail');
var loginRouter = require('./routes/login');
var profileRouter = require('./routes/profile');
var registerRouter = require('./routes/register');
var resultsRouter = require('./routes/results');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*Session */
app.use(session({
  secret: 'El mensaje oculto',
  resave: true,
  saveUninitialized: false,
}));

app.use(function (req, res, next) {
  if (req.session.usuario) {
    res.locals = {
      logueado: true,
      miUsuario: req.session.usuario
    }
  } else {
    res.locals = {
      logueado: false
    }
  }

  return next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/detail', detailRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);
app.use('/results', resultsRouter);

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
