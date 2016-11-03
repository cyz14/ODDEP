var express = require('express');
var router = express.Router();

router.get('/code/:pid', function(req, res, next) {
    var pid = req.params.pid;
    res.render('editor-code', { 
        title : '编辑#' + pid,
        pid : pid
    });
});

router.get('/visual/:pid', function(req, res, next) {
    var pid = req.params.pid;
    res.render('editor-visual', { 
        title : '编辑#' + pid,
        pid : pid
    });
});

module.exports = router;