module.exports = function(app) {
    const session = require('express-session');
    const bodyParser = require('body-parser');
    const MySQLStore = require('express-mysql-session')(session);
    const mysql = require('mysql');

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    //기본 라우팅
    app.get('/', function(req, res) {
        res.render('start.html');
    });
    app.get('/register', function(req, res) {
        res.render('register.html');
    });
    app.get('/login', function(req, res) {
        res.render('login.html');
    });
    app.get('/select_page', function(req, res) {
        res.render('select_page.html');
    });

    //select_page에서 연결되는 부분. 선택사항에 따라 달라용
    app.get('/mk_presidential_election', function(req, res) {
        if (req.session.username) {
            res.render('mk_presidential_election.html');
        } else {
            res.render('login.html');
        }
    });
    app.get('/mk_shareholders_meeting', function(req, res) {
        if (req.session.username) {
            res.render('mk_shareholders_meeting.html');
        } else {
            res.render('login.html');
        }
    });
    app.get('/presidential_election', function(req, res) {
        if (req.session.username) {
            res.render('vote.html');
        } else {
            res.render('login_fail/login_fail_null.html');
        }
    });
    app.get('/shareholders_meeting', function(req, res) {
        res.send(`
      <h1>shareholders_meeting.</h1>
    `);
    });


    app.post('/try_voting', function(req, res) {
        if(req.session.userid != undefined && req.session.username != undefined){
            console.log(req.session.userid + "인 " + req.session.username + "가 "+req.body.label + "에게 투표했습니다.");
            res.render("vote.html");
        }else{
            console.log("투표권이 만료되었습니다. 다시 확인해 주십시오.");
            res.render('login_fail/login_fail.html');
        }

    });
    app.get('/vote_success', function(req, res) {
        var sql = "UPDATE citizens SET is_voted = 0 WHERE id = \'" + req.session.userid + "\'";

        var conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'gusdk9470',
            port: '3307',
            database: 'voter'
        });
        conn.connect();
        conn.query(sql, function(err) {
            if (err) {
                console.log(err);
            }
        });
        req.session.destroy();
        res.render('vote_success.html');
    });
    app.get('/voter_info', function(req, res) {
        res.render('voter_info.html');
    });
}
