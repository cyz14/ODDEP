var request = require('supertest');
var auth = require('./routes/account');

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
var session = require('./routes/session');

describe('前端响应', function() {
    this.timeout(3000);

    describe('主页', function() {
        
        describe('GET /', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/')
                .expect(200, done);
            });
        });

    });

    describe('注册', function() {

        describe('GET /register', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/register')
                .expect(200, done);
            });
        });

    });

    describe('登录验证', function() {

        describe('GET /auth/login', function() {
            it('测试状态码正常', function(done) {
                request(app)
                .get('/auth/login')
                .expect(200, done);
            });
        });

        describe('未登录阻拦', function() {
            var path = [
                '/admin',
                '/status',
                '/problem',
                '/aaa',
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
                        .expect('Location', '/auth/login', done);
                    });
                })(path[p]);
            }
        });

        describe('登录', function() {
            it('登录失败测试', function(done) {
                request(app)
                .post('/auth/login')
                .send({
                    username : 'root',
                    password : 'pass'
                })
                .expect(302)
                .expect('Location', '#err', done);
            })
            it('账号root,密码root,成功后重定向到/', function(done) {
                auth.login(session, auth.root, done);
            });
            it('测试管理员权限', function(done) {
                session.get('/admin')
                .expect(200, done);
            });
        });

    });

    var routes_test = require('./routes/routes-test');

    describe('登出验证', function() {

        describe('GET /auth/logout', function() {

            it('登出操作，重定向到主页', function(done) {
                session.get('/auth/logout')
                .expect(302)
                .expect('Location', '/', done);
            });

        });

        describe('GET /status', function() {

            it('测试是否登出，重定向到登录页面', function(done) {
                session.get('/status')
                .expect(302)
                .expect('Location', '/auth/login', done);
            });

        });

    });

});

exports.app = app;