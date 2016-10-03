var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    var code = req.body.code;
    var stim = req.body.stim;
    // 将提交加入队列 TODO
    console.log("!code:");
    console.log(code); // temp
    console.log("!stim:");
    console.log(stim);
    res.redirect('/status');
});

module.exports = router;