var express = require('express');
var router = express.Router();

router.get('/:pid', function(req, res, next) {
    res.render('problem-edit', {title: '编辑' + req.params.pid});
});

module.exports = router;