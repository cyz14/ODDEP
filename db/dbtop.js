var tp = require('../tiny-promise'); // 相对路径
var sqlite3 = require('sqlite3').verbose();
var db = function() {
    return new sqlite3.Database('./db/tot.db'); // . 是项目根目录(特殊)不同于require
};
exports.db = db;

var isEmptys = function() {
    var obj = this;
    for (key in obj) {
        if (typeof(obj[key]) !== 'function' && obj[key]) {
            return false;
        }
    }
    return true;
}
exports.isEmptys = isEmptys.isEmptys = isEmptys;

// opt : { funs:{}, sep:',' }
exports.obj2Stmt = function(op, args, opt) {
    var str = '';
    var funs = {};
    var sep = ',';
    if (typeof(opt) !== 'undefined') {
        funs = opt.funs || null;
        if (opt.sep) {
            sep = ' ' + opt.sep + ' ';
        }
    }
    for (var key in args) 
        if (args[key]) {
            if (str.length) {
                str += sep;
            }
            str += key + '=';
            if (typeof(args[key]) === 'string') {
                str += '"' + args[key] + '"'
            } else {
                str += args[key];
            }
        }
    for (var key in funs) 
        if (funs[key]) {
            if (str.length) {
                str += sep;
            }
            str += key + '=' + funs[key] + ' ';
        }
    if (str) {
        return ' ' + op + ' ' + str + ' ';
    } else {
        return ' ';
    }
};

// 给promise.then(<?>)用的数据库连接关闭器
var db_close = function(dabs) {
    return function(arg) {
        dabs.close();
        console.log('db closed.');
        return arg;
    }
};
exports.db_close = db_close;

var md5 = require('js-md5');
// cb(err, row)
exports.md5Salt_auth = function(username, password, next) {
    dabs = db();
    tp.promisify.call(dabs, 'get', 'select * from user where name = ?', username)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        var passwd = md5(password + row.salt);
        if (passwd === row.password) {
            next(null, row);
        } else {
            next(null, null);
        }
    }))
    .catch(function(err) {
        next(err);
    });
};

// 最简单的明文验证 (已放弃)
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

// 注册token,uid的提交，已存在则无动作 (计划放弃)
// next(err)
//*
exports.submissionRegisterIfNotExists = function(token, uid, pid, tag, next) {
    dabs = db();
    console.log('register pending...');
    tp.promisify.call(dabs, 'get', 'select * from submission where token = ? and uid = ?', 
        token, uid)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        if (!row) {
            return tp.promisify.call(dabs, 'run',
            'insert into submission (token, uid, pid, tag) values (?, ?, ?, ?)',
            token, uid, pid, tag);
        }
        console.log(row);
    })).then(function(err) {
        if (!err) console.log('register done.');
        next(err);
    })
    .then(db_close(dabs), db_close(dabs));
}; // */

exports.updStatPromise = function(token, status) {
    dabs = db();
    return tp.promisify.call(dabs, 'run', 'UPDATE submission SET status = ? WHERE token = ?', status, token)
    .then(db_close(dabs));
}