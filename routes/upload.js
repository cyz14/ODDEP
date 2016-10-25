var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/tmp/motivate'); // . 是项目根目录，与require不同
    },
    filename: function(req, file, cb) {
        var name = req.params.token.replace(':', '-') + '.vhd';
        cb(null, name);
    }
});

var reciever = multer({ storage: storage });

var express = require('express');
var router = express.Router();
var dbtop = require('../db/dbtop');

router.post('/:token', reciever.single('motivate'), function(req, res, next) {
    // 接受上传的激励文件
});

module.exports = router;