var express = require('express');
var router = express.Router();
var dbtop = require('../db/dbtop');
var getPorb = dbtop.getProb;
var tp = require('../tiny-promise');

router.get('/:pid', function(req, res, next) {
    var db = dbtop.db();
    getPorb(db, req.params.pid, function(err, row) {
        db.close();
        console.log('prob-view', err, row);
        if (err || !row) {
            next({
                status:404,
                message:'Not Found',
                error:err
            })
        } else {
            res.render('problem-view', { 
                title: row.title,
                problem : row
            });
        }
    });
});

var page_items = 25;
var offset = 4;
router.get('/', function(req, res, next) {
    var index = req.query.index || '1';
    index = parseInt(index);
    var pager = {};
    var list = {};
    var db = dbtop.db();
    var left = (index - 1) * page_items + 1000;
    var right = left + page_items;
    var maxInd = Math.floor((dbtop.env.getProblemCount() - 1) / page_items) + 1;
    if (index === 0) {
        index = maxInd;
    }
    tp.promisify.call(db, 'all', 'select * from problem where pid >= ? and pid <= ?', left, right)
    .then(tp.spread(function(err, rows) {
        db.close();
        if (err) {
            next(err);
            return ;
        }
        list = rows;
        pager.now = index;
        if (index > 1) pager.left = true;
        if (index < maxInd) pager.right = true;
        pager.nums = [];
        for (var i = index - offset; i <= index + offset; ++i) {
            if (i > 0 && i <= maxInd) pager.nums.push(i);
        }
        res.render('problem-list', {
            title: 'ProblemSet',
            list: list,
            pager: pager
        });
    }));
});

module.exports = router;