var express = require("express");
var router = express.Router();
var basic_auth = require("../db/dbtop").basic_auth;

router.get('/logout', function(req, res, next) {
    req.session.uid = null;
    req.session.user = null;
    req.session.password = null;
    req.session.nickname = null;
    res.redirect('/');
});

router.get('/login', function(req, res, next) {
    if (typeof(req.session.token) != 'undefined') {
        res.redirect('/');
    }
    else {
        res.render('login', { title: '登录'});
    }
});

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    basic_auth(username, password, function(line) {
        if (line) {
            // 最简单的明文会话
            req.session.user = username;
            req.session.password = password;
            req.session.uid = line.uid;
            req.session.nickname = line.nickname;
            res.redirect('/');
        } else {
            res.redirect('#err');
        }
    });
});

module.exports = router;