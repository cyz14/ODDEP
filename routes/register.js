var express = require('express');
var router = express.Router();
var tp = require('../tiny-promise');
var dabs = require('../db/dbtop');

router.get('/', function(req, res, next) {
    res.render('register');
});

router.get('/nameexists', function(req, res, next) {
    var name = req.query.username;
    var db = dabs.db();
    tp.promisify.call(db, 'get', 'select uid from user where name = ?', name)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        if (row) {
            res.send('unavailable');
        } else {
            res.send('ok');
        }
    }))
    .catch(function(err) {
        console.log(err);
    });
});

module.exports = router;