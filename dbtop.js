var tp = require('./tiny-promise');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tot.db');
exports.db = db;

// 最简单的明文验证
exports.basic_auth = function(username, password, next) {
    tp.promisify(db, db.get, "select * from main.user where name = ? and password = ?", 
        [username, password])
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        console.log(row);
        next(row);
    }))
    .catch(function(err){
        console.log(err);
    });
    /*db.get("select * from main.user where name = ? and password = ?",
        [username, password], function(err, row) {
            if (err) throw err;
            /*if (row) {
                console.log('auth:' + username);
                console.log(row);
            }* /
            next(row);
        });*/
};

exports.submissionRegisterIfNotExists = function(token, uid) {
};

/*var get_promisified = function(sql, params) {
    return new Promise(function(resolve, reject) {
        db.get(sql, params, function(err, row) {
            resolve(arguments);
        });
    });
};*/