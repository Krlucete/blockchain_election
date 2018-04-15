const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const server = app.listen(7777, function() {
  console.log("Express server has started on port 7777")
});
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('src'));
app.use(express.static('build/contracts'));

app.use(bodyParser.urlencoded({
  extended: false
}));

//router
const main_router = require('./router/main')(app);
