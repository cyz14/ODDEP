var express = require("express");
var router = express.Router();

router.get('/logout', function(req, res, next) {
    req.session = null;
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
    console.log('login:' + username);
    req.session.user = username;
    //req.session.token = "TODO";
    res.redirect('/');
});

module.exports = router;