var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 한다.
var db = mysql.createConnection({         // 연결 객체 생성
  host     : '127.0.0.1',
  user     : 'nodejs',
  password : '1111',
  database : 'opentutorials',
});

db.connect();       // mysql 연결

// db.query('select * from topic', function (error, results, fields) {  // 쿼리 실행
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// });

db.query('select * from topic', function (error, results, fields) {
  db.query('select * from test', function (error, results, fields) {
    console.log('두번째 쿼리');
  });
  console.log('첫번째 쿼리');
});

db.end();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
