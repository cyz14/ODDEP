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
var ioffset = 4;

router.get('/', function(req, res, next) {
    var db = dabs.db();
    var index = req.query.index || 1;
    if (typeof(index) === 'string') index = parseInt(index);
    var pager = {};
    var list = [];
    // 处理fileter
    var query = {};
    if (req.query.user) query['user.name'] = req.query.user;
    if (req.query.pid) query['submission.pid'] = req.query.pid;
    if (req.query.tag) query['submission.tag'] = req.query.tag;

    var qhead = 'select * from submission inner join user on user.uid = submission.uid'
    tp.promisify.call(db, 'all', qhead + dabs.obj2Stmt('where', query, {sep:'and'}) + 'ORDER BY id DESC')
    .then(tp.spread(function(err, rows) {
        if (err) throw err;
        var la = Math.ceil(rows.length / page_items);
        if (index === 0) index = la;
        var r = (index - 1) * page_items;
        // build pager
        pager.now = index;
        if (index > 1) pager.left = true;
        if (index < la) pager.right = true;
        pager.nums = [];
        for (var i = index - ioffset; i < index + ioffset; ++i)
        {
            if (i > 0 && i <= la) pager.nums.push(i);
        }
        // build list
        for (var i = 0; i < 20 && i + r < rows.length; ++i) {
            var j = i + r;
            list[i] = {
                id : rows[j].id,
                user : rows[j].nickname,
                pid : rows[j].pid,
                tag : rows[j].tag,
                status : rows[j].status,
                code: statusMapCode[rows[j].status],
                time : rows[j].submit_time
            }
        }
        res.render('status', {
            title: 'STATUS',
            list: list,
            pager: pager,
            needPageFooter: {
                time: new Date().toString()
            }
        });
    }))
    .then(db_cl(db), db_cl(db));

    /*tp.promisify.call(db, 'get', 'select count(id) from submission inner join user \
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
    });//*/
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