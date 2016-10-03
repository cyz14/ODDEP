var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var example = {
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
    };
    res.render('status', example);
});

module.exports = router;