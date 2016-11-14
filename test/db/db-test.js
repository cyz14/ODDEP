var dbtop = require('../../db/dbtop');
var tp = require('../../tiny-promise');
var should = require('should');

describe('db/dbtop.js', function() {
    var db = dbtop.db();
    describe('env 对象', function() {
        var env = dbtop.env;
        it('submission加1', function() {
            var cnt = env.getSubmissionCount();
            var tmp = env.submit();
            ++ cnt;
            tmp.should.be.equal(cnt);
            tmp = env.getSubmissionCount();
            tmp.should.be.equal(cnt);
        });
        it('problem加1', function() {
            var cnt = env.getProblemCount();
            var tmp = env.addProblem();
            ++ cnt;
            tmp.should.be.equal(cnt);
            tmp = env.getProblemCount();
            tmp.should.be.equal(cnt);
        });
    });
    describe('isEmptys()', function() {
        var isEmptys = dbtop.isEmptys;
        it('判断context是否为空', function() {
            (isEmptys.call({})).should.be.true();
            (isEmptys.call({9:1})).should.be.false();
        });
    });
    describe('obj2Stmt()', function() {
        var obj2Stmt = dbtop.obj2Stmt;
        it('将js对象转化为sql语句中的键值对', function() {
            (obj2Stmt('where', {
                uid:1,
                name:'root'
            })).should.be.equal(' where uid=1,name="root" ');
            (obj2Stmt('set', {}, {
                funs: {
                    'user.uid':'submission.uid',
                    name:1
                },
                sep : 'and'
            })).should.be.equal(' set user.uid=submission.uid and name=1 ');
            (obj2Stmt('where', {})).should.be.equal(' ');
        });
    });
    describe('md5Salt_auth()', function() {
        var auth = dbtop.md5Salt_auth;
        it('以数据库中的user表做登录', function(done) {
            auth('root', 'auth fail is acceptable', function(err) {
                should.ifError(err);
                done();
            });
        });
    });
    describe('submissionRegisterIfNotExists()', function() {
        var token = 'mocha-test';
        var tag = '!test in mocha!'
        after(function() {
            db.run('delete from submission where uid = ?', -1);
        });
        it('注册提交记录', function(done) {
            dbtop.submissionRegisterIfNotExists(token, -1, 1000, tag
            , function(err) {
                should.ifError(err);
                done();
            });
        });
    });
    describe('updStatPromise()', function() {
        var token = 'mocha-test';
        var tag = '!test in mocha!'
        before(function() {
            db.run('insert into submission (token, uid, pid, tag, status) values (?, ?, ?, ?, ?)'
            , token, -1, 1000, tag, 'failed');
        });
        after(function() {
            db.run('delete from submission where uid = ?', -1);
        });
        it('更新提交状态', function() {
            return dbtop.updStatPromise(token, 'done')
            .then(function(err) {
                should.ifError(err);
                return tp.promisify.call(db, 'get'
                , 'select * from submission where uid = ?', -1);
            })
            .then(tp.spread(function(err, row) {
                should(row.token).be.equal(token);
                return row.status;
            }))
            .should.be.finally.equal('done');
        });
    });
    describe('getProb()', function() {
        it('取出题目资料', function(done) {
            dbtop.getProb(db, 1000, function(err, row) {
                should.ifError(err);
                (row.pid).should.be.equal(1000);
                (row.title).should.be.equal('Visual SandBox');
                done();
            });
        });
    })
});

var uimp_test = require('./uimp-test');