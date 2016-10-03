var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('editor', { title: '编辑中' });
});

module.exports = router;