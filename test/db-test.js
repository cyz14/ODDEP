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

db.close(function(err) {
    assert.strictEqual(err, null);
    console.log('db test done.');
});