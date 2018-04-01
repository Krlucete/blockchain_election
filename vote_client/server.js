const express = require('express');
const app = express();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');
const mysql = require('mysql');
const server = app.listen(7777, function() {
  console.log("Express server has started on port 7777")
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
//session
app.use(session({
  secret: '1234DSFs@ad1234!@#$asd',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'j2dxro3r',
    database: 'voter'
  })
}));
//router
const main_router = require('./router/main')(app);
const auth_router = require('./router/auth')(app);
