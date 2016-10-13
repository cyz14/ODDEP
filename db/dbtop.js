var tp = require('../tiny-promise'); // 相对路径
var sqlite3 = require('sqlite3').verbose();
var db = function() {
    return new sqlite3.Database('./db/tot.db'); // . 是项目根目录(特殊)不同于require
};
exports.db = db;

var db_close = function(dabs) {
    return function(arg) {
        dabs.close();
        console.log('db closed.');
        return arg;
    }
};
exports.db_close = db_close;

// 最简单的明文验证
// next(row)
exports.basic_auth = function(username, password, next) {
    dabs = db();
    tp.promisify.call(dabs, 'get', "select * from user where name = ? and password = ?", 
        [username, password])
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        console.log(row);
        next(row);
    }))
    .then(db_close(dabs), db_close(dabs))
    .catch(function(err){
        console.log(err);
        next(null);
    });
};

// 注册token,uid的提交，已存在则无动作
// next(err)
exports.submissionRegisterIfNotExists = function(token, uid, next) {
    dabs = db();
    console.log('register pending...');
    tp.promisify.call(dabs, 'get', 'select (id) from submission where token = ? and uid = ?', 
        token, uid)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        if (!row) {
            return tp.promisify.call(dabs, 'run',
            'insert into submission (token, uid) values (?, ?)',
            token, uid);
        }
        console.log('exist?');
        console.log(row);
        return null;
    })).then(tp.spread(function(err) {
        if (!err) console.log('register done.');
        next(err);
    }))
    .then(db_close(dabs), db_close(dabs));
    next(null);
};