var should = require('should');

describe('tiny-promise.js', function() {
    var tp = require('../tiny-promise');
    var test0 = function(cb) {
        cb();
    };
    var fun0 = function() {
        return 1;
    };

    describe('promisify()', function() {
        it('回调函数无参数', function(done) {
            tp.promisify(test0)
            .then(fun0)
            .then(function(res) {
                res.should.be.equal(1);
                done();
            });
        });
    });
});