var assert = require('assert');
var tp = require('../tiny-promise'); // 相对路径
var sqlite3 = require('sqlite3').verbose();
var database = new sqlite3.Database('./db/tot.db'); // !!! 应该只有一个连接
var db = function() {
    //return new sqlite3.Database('./db/tot.db'); // . 是项目根目录(特殊)不同于require
    return database;
};
exports.db = db;

/*
    维护提交数、题目数，以供使用
*/
var env = (function() {
    var submission_count = 0;
    var problem_count = 0;
    var obj = {};
    var dabs = db();
    dabs.get('select count(*) from submission', function(err, row) {
        assert.strictEqual(err, null);
        submission_count = row['count(*)'];
    });
    dabs.get('select count(*) from problem', function(err, row) {
        assert.strictEqual(err, null);
        problem_count = row['count(*)'];
    });
    obj.submit = function() {
        ++ submission_count;
        return submission_count;
    }
    obj.addProblem = function() {
        ++ problem_count;
        return problem_count;
    }
    obj.getSubmissionCount = function() {
        return submission_count;
    }
    obj.getProblemCount = function() {
        return problem_count;
    }
    return obj;
}());
exports.env = env;

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
var obj2Stmt = function(op, args, opt) {
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
exports.obj2Stmt = obj2Stmt;

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
        env.submit();
        next(err);
    });
}; // */

// 更新提交状态
exports.updStatPromise = function(token, status) {
    dabs = database;
    return tp.promisify.call(dabs, 'run',
        'UPDATE submission SET status = ? WHERE token = ?', status, token);
}

// cb(err, row) : row, problem row
exports.getProb = function(db, pid, next) {
    db.get('select * from problem where pid = ?', pid, next);
}

// 新建或更新题目
exports.createOrUpdateProb = function(query, data, next) {
    var qstmt = obj2Stmt('where', query, { sep : 'and'});
    var dabs = db();
    tp.promisify.call(dabs, 'get', 'select count(*) from problem' + qstmt)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        if (row['count(*)'] === 1) {
            var sstmt = obj2Stmt('SET', data);
            return tp.promisify.call(dabs, 'run', 'update problem' + sstmt + qstmt);
        } else {
            return tp.promisify.call(dabs, 'run', 'insert into problem (title, source, limited, description) values (?, ?, ?, ?)', data.title, data.source, data.limited, data.description);
        }
    }))
    .catch(function(err) {
        console.error(err);
    });
}