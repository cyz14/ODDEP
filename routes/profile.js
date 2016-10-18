var express = require('express');
var router = express.Router();
var tp = require('../tiny-promise');
var dabs = require('../db/dbtop');

router.get('/', function(req, res, next) {
    res.render('profile', {title: '设定'});
});

router.post('/update', function(req, res, next) {
    var user = req.session.user;
    var nickname = req.body.nickname || null;
    // 需要用tp.bundle来处理多任务并发
    console.log(req.body);
    res.send('bad');
    /*if (nickname) {
        var db = dabs();
        tp.promisify.call(db, 'run', 'UPDATE user SET nickname = ? WHERE name = ?',
            nickname, user)
        .then(function(err) {
            if (err) {
                res.send('bad');
            } else {
                res.send('ok');
            }
        })
    }*/
});

module.exports = router;