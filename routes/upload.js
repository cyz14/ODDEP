var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/tmp/motivate');
    },
    filename: function(req, file, cb) {
        var name = req.params.token.replace(':', '-');
        cb(null, name);
    }
});

var reciever = multer({ storage: storage });

var express = require('express');
var router = express.Router();

router.post('/:token', reciever.single('motivate'), function(req, res, next) {
});