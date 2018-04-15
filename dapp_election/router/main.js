module.exports = function(app) {
  const bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

  app.get('/', function(req, res) {
    res.render('/index.html');
  });
  app.get('/voter', function(req, res) {
    res.render('voter.html');
  });
}
