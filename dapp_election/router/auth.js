module.exports = function(app) {
    const express = require('express');
    const session = require('express-session');
    const mysql = require('mysql');

    const CryptoJS = require("crypto-js");
    var salt = "$#$awsd%강ㄴㅇㄷ~!@#~!@ADZDCXSDFVZXCVAWEFasdfwen이";
     app.get('/auth/logout', function(req, res) {
      req.session.destroy();
      res.redirect('/logo');
    });

    app.post('/auth/login', function(req, res) {
        var uname = req.body.username;
        var pwd = req.body.password;
        const is_voted = 1;
        var sql = "select * from citizens where name=\'" + uname + "\' AND resident_num = \'" + pwd + "\'";
        var conn = mysql.createConnection({
          host: 'kyhdb.cjnpxidk6u8p.ap-northeast-2.rds.amazonaws.com',
          user: 'kyhkissme',
          password: 'dydrkfl1',
          port: '3306',
          database: 'hyuna'
        });
        conn.connect();

        conn.query(sql, function(err, rows, fields) {

            if (err) {
              console.log(err);
            } else {
              if (rows == "") {
                res.render('login_fail/login_fail.html');

              }else{
                var resident_num = rows[0].resident_num;
                var seed = resident_num;
                var first_resident_num = resident_num.substring(0, 1);
                var age = 0;
                if (first_resident_num == "0") {
                  age = 2018 - 2000 - Number(resident_num.substring(0, 2));
                } else {
                  age = 2018 - 1900 - Number(resident_num.substring(0, 2));
                }

                if(rows[0].is_voted!=is_voted){
                  res.render('login_fail/login_fail_voted.html');

                }else if(age < 20) {
                  res.render('login_fail/login_fail_age.html');
                } else {
                  var id = rows[0].id;
                  var name = rows[0].name;
                  var location = rows[0].location;

                  req.session.username = name;
                  req.session.userid = id;
                  req.session.location = location;

                  //seed 1차 변형.
                  salt+=CryptoJS.SHA256(resident_num).toString();
                  //현화한테 부탁해서 시간값 불러오기.(db에서)
                  //salt값에 시간값도 추가하기.
                  req.session.crypto = CryptoJS.SHA256(seed+salt).toString();
                  
                  req.session.save(function() {
                    res.redirect('http://localhost:7777/select_page');
                  });
                }
              }
            }
        });

      });

      app.get('/auth/login', function(req, res) {
        res.render('validate.html');
      });
    };
