var fs = require('fs');
var tp = require('../tiny-promise');
var dbtop = require('./dbtop');
var md5 = require('js-md5');

var getSalt = function() {
    return Math.random().toString(36).substr(2) + ':' + new Date().getTime();
};

exports.doDefault = function(cb) {
    console.log(0);
    tp.promisify.call(fs, fs.readFile, './db/userImport.txt', 'utf-8')
    .then(tp.spread(function(err, data) {
        if (err) cb(err);
        console.log('data:', data);
        var db = dbtop.db();
        console.log(1);
        var stmt = db.prepare('insert into user (name, nickname, password, salt) values (?, ?, ?, ?)');
        console.log(2);
        var alist = data.split(/\r\n|\r|\n/);
        console.log('alist:', alist);
        for (var i = 0; i < alist.length; ++i) {
            var a = alist[i].split(' ');
            if (a.length === 2) {
                var name = a[0];
                var salt = getSalt();
                var pass = md5(a[1] + salt);
                stmt.run(name, name, pass, salt);
            }
        }
        stmt.finalize(cb);
        db.close();
    }))
    .catch(function(err) {
        cb(err);
    });
}