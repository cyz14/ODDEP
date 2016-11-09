var express = require('express');
var router = express.Router();
var tp = require('../tiny-promise');
var dabs = require('../db/dbtop');
var md5 = require('js-md5');

router.get('/', function(req, res, next) {
    res.render('profile', {title: '设定'});
});

router.post('/update', function(req, res, next) {
    var user = req.session.user;
    var nickname = req.body.nickname || null;
    var password = req.body.newpasswd || null;
    var eldpasswd = req.body.passwd || null;
    var whereStmt = dabs.obj2Stmt('where', { name: user });
    var setObj = { nickname: nickname, password: password };
    if (!dabs.isEmptys.call(setObj)) {
        var db = dabs.db();
        (function() {
            if (setObj.password) {
                return tp.promisify(dabs.md5Salt_auth, user, eldpasswd);
            } else {
                return tp.pickle(null, true);
            }
        }())
        .then(tp.spread(function(err, row) {
            if (err) throw err;
            if (!row) {
                res.send('auth err');
                throw 'auth err';
            }
            if (setObj.password) {
                setObj.password = md5(setObj.password + row.salt);
            }
            var setStmt = dabs.obj2Stmt('set', setObj);
            console.log(setStmt);
            return tp.promisify.call(db, 'run', 'update user ' + setStmt + whereStmt);
        }))
        .then(function(err) {
            if (err) throw err;
            if (nickname) req.session.nickname = nickname;
            res.send('ok');
        })
        .catch(function(err) {
            if (err !== 'auth err') {
                console.log(err);
                console.log(req.body);
            }
            res.send('bad');
        });
    }
});

module.exports = router;