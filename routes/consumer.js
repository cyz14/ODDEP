var express = require('express');
var router = express.Router();

var sim = require('../sim/child').sim;
var fs = require('fs');

router.post('/', function(req, res, next) {
    var code = req.body.code;
    var stim = req.body.stim;
    // 将提交加入队列 TODO
    console.log("!code:");
    console.log(code); // temp
    console.log("!stim:");
    console.log(stim);
	// fs.writeFile('./sim/gen.vhd', code, function(err) {
	// 	if (err) {
	// 		throw err;
	// 	}
	// });
	// fs.writeFile('./sim/in.txt', stim, function(err) {
	// 	if (err) {
	// 		throw err;
	// 	}
	// });
	sim();
    res.redirect('/status');
});

module.exports = router;
