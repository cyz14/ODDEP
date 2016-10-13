var express = require('express');
var router = express.Router();
var dbtop = require('../db/dbtop');

//var sim = require('../sim/child').sim;
//var fs = require('fs');

router.post('/', function(req, res, next) {
	// 数据库注册提交记录
	var token = req.body.token;
	var uid = req.session.uid;
	dbtop.submissionRegisterIfNotExists(token, uid, function(err) {
		if (err) console.log(err);
	});
	
    var code = req.body.code.replace(/<br>/g, '\n');
    var stim = req.body.stim.replace(/<br>/g, '\n');
    // 将提交加入队列 TODO
    console.log("!code:", code);
    console.log("!stim:", stim);
	console.log("!token:", token);
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
	//sim();
    res.redirect('/status');
});

module.exports = router;
