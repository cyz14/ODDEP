var request = require('supertest');
var superSession = require('supertest-session');

describe('部署运行前测试', function() {

    describe('lemon', function() {

        this.timeout(6000);
        var lemon = require('../sim/lemon');
        var token = 'mocha-sim-test';
        var count = 0;
        var limit = 0;
        var slot = null;
        lemon.setSLOT(token + '4null', null);
        lemon.setSLOT(token, function() {
            ++ count;
            if (limit === count && typeof(slot) === 'function') {
                slot();
            }
        });
        function setListener(val, gslot) {
            if (count >= val) {
                gslot();
            } else {
                limit = val;
                slot = gslot;
            }
        }
        for (var i = 1; i <= 4; ++i) {
            (function(num) {
                it('sim测试' + num, function(done) {
                    setListener(num, done);
                });
            })(i);
        }

    });

});

// 开始部署测试
var app = require('../app');
var session = superSession(app);

describe('前端响应', function() {
    this.timeout(3000);

    describe('主页', function() {
        
        describe('GET /', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/')
                .expect(200)
                .end(function(err, res) {
                    if (err) done(err);
                    done();
                });
            });
        });

    });

    describe('注册', function() {

        describe('GET /register', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/register')
                .expect(200)
                .end(function(err, res) {
                    if (err) done(err);
                    done();
                });
            });
        });

    });

    describe('登录验证', function() {

        describe('GET /auth/login', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/auth/login')
                .expect(200)
                .end(function(err, res) {
                    if (err) done(err);
                    done();
                });
            });
        });

        describe('未登录阻拦', function() {
            var path = [
                '/admin',
                '/status',
                '/problem',
                '/aaa'
            ];
            var ap = {
                '/aaa' : " 不合法的路径"
            };
            for (var p in path) {
                (function(path) {
                    it(path + (ap[path] || ''), function(done) {
                        request(app)
                        .get(path)
                        .expect(302)
                        .end(function(err, res) {
                            if (err) done(err);
                            done();
                        });
                    });
                })(path[p]);
            }
        });

        describe('登录', function() {
            var md5 = require('js-md5');
            var rock = 'yvykf07ej800be29TAOLIDIXIACHEDUI8nzoyyz0z5lsdcxr';
            it('账号root,密码root,成功后重定向到/', function(done) {
                session.post('/auth/login')
                .send({
                    username : 'root',
                    password : md5('rootroot' + rock)
                })
                .expect(302)
                .expect('Location', '/', done);
            });
            it('测试管理员权限', function(done) {
                session.get('/admin')
                .expect(200, done);
            });
        });

    });

});

exports.app = app;