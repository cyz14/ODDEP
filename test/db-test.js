var assert = require('assert');
var dabs = require('../db/dbtop');
var tp = require('../tiny-promise');

var db = dabs.db();

/*
tp.promisify.call(db, 'all', 'SELECT id, nickname, status, submit_time from submission inner join user on user.uid = submission.uid WHERE id <= 3 and id > -17 ORDER BY id DESC')
.then(tp.spread(function(err, rows) {
    console.log(err, rows);
}));//*/

db.get('select count(*) from user', function(err, row) {
    assert.strictEqual(err, null);
    console.log('user amount:', row['count(*)']);
});

db.get('select count(*) from submission', function(err, row) {
    assert.strictEqual(err, null);
    console.log('submission amount:', row['count(*)']);
});

dabs.md5Salt_auth('root', 'root', function(err, row) {
    assert.strictEqual(err, null);
    console.log('md5Salt_auth got result:', row);
    console.log(row.nickname + '认证测试成功');
})

db.get('select * from user' + dabs.obj2Stmt('where', {uid:1, name:'root'}, {sep:'and'}),
    function(err, row) {
        assert.strictEqual(err, null);
        assert.strictEqual(row.name, 'root');
        console.log('dbtop.obj2Stmt tested.');
    })

db.close(function(err) {
    assert.strictEqual(err, null);
    console.log('db test done.');
});

//console.log(dabs.obj2Stmt('set', {uid:1,name:'root'},{funs:{'u.u':'root'}}));
//console.log(dabs.obj2Stmt('set', {uid:1,name:'root'},{funs:{'u.u':'root'},sep:'and'}));
// dabs.submissionRegisterIfNotExists('lk039ax39e3lerk9:1476348300969',
//     1, 1000, '', function(err) {
//         assert.strictEqual(err, null);
//         console.log('submission register tested.');
//     })