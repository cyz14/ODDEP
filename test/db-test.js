var dabs = require('../db/dbtop');
var tp = require('../tiny-promise');

var db = dabs.db();

/*
tp.promisify.call(db, 'all', 'SELECT id, nickname, status, submit_time from submission inner join user on user.uid = submission.uid WHERE id <= 3 and id > -17 ORDER BY id DESC')
.then(tp.spread(function(err, rows) {
    console.log(err, rows);
}));//*/