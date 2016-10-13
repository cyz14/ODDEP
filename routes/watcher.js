var express = require('express');
var router = express.Router();
var dabs = require('../db/dbtop').db;
var db_cl = require('../db/dbtop').db_close;
var tp = require('../tiny-promise');

var statusMapCode = {
    'done' : 0,
    'running' : 1,
    'in queue' : 2,
    'failed' : 100
};

router.get('/', function(req, res, next) {
    var db = dabs();
    var index = req.body.index || 1;
    var pager = { now : index };
    var list = [];
    var total = 0;
    tp.promisify.call(db, 'get', 'select count(id) from submission')
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        total = row['count(id)'];
        var r = total - (index - 1) * 20;
        // pager处理
        pager.nums = [];
        for (var i = index - 4, j = Math.ceil(total / 20); i < index + 5; ++i) {
            if (i > 0 && i <= j) {
                pager.nums.push(i);
                if (i === index - 1) pager.left = true;
                if (i === index + 1) pager.right = true;
            }
        }
        console.log(r, r - 20);
        return tp.promisify.call(db, 'all',
             'SELECT id, nickname, status, submit_time from submission inner join user on user.uid = submission.uid WHERE id <= ? and id > ? ORDER BY id DESC', r, r - 20);
    }))
    .then(tp.spread(function(err, rows) {
        if (err) throw err;
        console.log(rows);
        for (var i = 0; i < rows.length; ++i) {
            list[i] = {
                id: rows[i].id,
                user: rows[i].nickname,
                time: rows[i].submit_time,
                status: rows[i].status,
                code: statusMapCode[rows[i].status]
            };
        }
    }))
    .catch(function(err) {
        console.log(err);
    }).then(db_cl(db), db_cl(db))
    .then(function() {
        res.render('status', {
            title: 'STATUS',
            list: list,
            pager: pager
        });
    });
    /*var example = {
        title : "STATUS",
        list : [
            {
                id : "4",
                user : "一二三四五六千",
                time : "2009-1-1 12:00:00",
                status : "in queue",
                code : 2
            },
            {
                id : "3",
                user : "tom",
                time : "2009-1-1 10:05:00",
                status : "running",
                code : 1
            },
            {
                id : "2",
                user : "tom",
                time : "2009-1-1 10:00:00",
                status : "failed",
                code : 100
            },
            {
                id : "1",
                user : "harry",
                time : "2009-1-1 09:00:00",
                status : "done",
                code : 0
            }
        ]
    };*/
});

module.exports = router;