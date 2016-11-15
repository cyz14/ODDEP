var should = require('should');
var session = require('./session');

describe('编辑页面', function() {
    describe('路由响应测试', function() {
        it('Visual Edit', function(done) {
            session.get('/editor/visual/1000')
            .expect(200, done);
        });
        it('Code Edit', function(done) {
            session.get('/editor/code/1001')
            .expect(200, done);
        });
    });
});

var t1 = require('./problem-view-test');
var t2 = require('./problem-edit-test');