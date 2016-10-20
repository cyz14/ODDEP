var express = require('express');
var router = express.Router();
var dabs = require('../db/dbtop');
var db_cl = dabs.db_close;
var tp = require('../tiny-promise');

var statusMapCode = {
    'done' : 0,
    'running' : 1,
    'in queue' : 2,
    'failed' : 100
};

var page_items = 20;

router.get('/', function(req, res, next) {
    var db = dabs.db();
    var index = req.query.index || 1;
    if (typeof(index) === 'string') index = parseInt(index);
    var pager = {now:index};
    var list = [];
    var total = 0;
    // 处理fileter
    deco_query = function(q) {
        if (q) {
            return 'WHERE ' + q;
        } else {
            return '';
        }
    };
    add_query = function(q, qa) {
        if (q) return q + ' and ' + qa;
        else return qa;
    }
    var query = '';
    if (req.query.user) query = add_query(query, "user.name = '" + req.query.user + "'");

    tp.promisify.call(db, 'get', 'select count(id) from submission inner join user \
        on user.uid = submission.uid ' + deco_query(query))
    .then(tp.spread(function(err, row) {
        console.log('query:', query, deco_query(query));
        if (err) throw err;
        total = row['count(id)'];
        if (!index) {
            index = Math.ceil(total / page_items);
            pager.now = index;
        }
        var r = total - (index - 1) * page_items;
        // pager处理
        pager.nums = [];
        for (var i = index - 4, j = Math.ceil(total / page_items); i < index + 5; ++i) {
            if (i > 0 && i <= j) {
                pager.nums.push(i);
                if (i === index - 1) pager.left = true;
                if (i === index + 1) pager.right = true;
            }
        }
        // query 处理
        query = add_query(query, 'submission.id <= ' + r);
        query = add_query(query, 'submission.id > ' + (r - page_items));
        console.log('query:', query, deco_query(query));
        return tp.promisify.call(db, 'all',
            'SELECT id, nickname, status, submit_time from submission inner join user \
            on user.uid = submission.uid ' + deco_query(query) + ' ORDER BY id DESC');
    }))
    .then(tp.spread(function(err, rows) {
        if (err) throw err;
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
        console.log(pager);
        res.render('status', {
            title: 'STATUS',
            list: list,
            pager: pager,
            needPageFooter: {
                time: new Date().toString()
            }
        });
    });
});

router.get('/submission/:id/', function(req, res, next) {
    db = dabs.db();
    var id = req.params.id;
    var result = { title: '提交#' + id + '结果'};
    tp.promisify.call(db, 'get', 'select * from submission where id = ?', id)
    .then(tp.spread(function(err, row) {
        if (err) throw err;
        result.submission = row;
        if (row.uid === req.session.uid) {
            return true;
        } else {
            return tp.promisify.call(db, 'get', 'select power from user where name = ?', 
                req.session.user)
                .then(tp.spread(function(err, row) {
                    if (err) throw err;
                    if (row.power > 0) return true;
                    else return false;
                }));
        }
    }))
    .then(function(permit) {
        if (!permit) {
            res.send('Permission denied.');
        } else {
            res.render('result', result);
        }
    }).catch(function(err) {
        res.send('Bad server.');
        console.log(err);
    });
})

module.exports = router;