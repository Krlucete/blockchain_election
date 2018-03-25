
module.exports = function(app) {

    app.get('/aws', function (req, res) {
        res.render('/test.html');
    });
}