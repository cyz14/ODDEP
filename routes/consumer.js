var express = require('express');
var router = express.Router();
var dbtop = require('../db/dbtop');
var tp = require('../tiny-promise');
var fs = require('fs');
var lemon = require('../sim/lemon');

router.post('/', function(req, res, next) {
	// 数据库注册提交记录
	var token = req.body.token;
	var uid = req.session.uid;
	var pid = req.body.prob;
	var tag = req.body.tag;
	dbtop.submissionRegisterIfNotExists(token, uid, pid, tag, function(err) {
		if (err) {
			console.log('exist!', err);
			return ;
		}
		var code = req.body.code.replace(/<br>/g, '\n');
		var stim = req.body.stim.replace(/<br>/g, '\n');
		// 将提交加入队列 TODO
		console.log("!code:", code);
		console.log("!stim:", stim);
		console.log("!token:", token);
		var codePath = './public/tmp/code/' + token + '.vhd';
		var stimPath = './public/tmp/motivate/' + token + '.vhd';
		tp.promisify.call(fs, fs.writeFile, codePath, code)
		.then(function(err) {
			if (err) throw err;
			if (stim === '#&!upload>') {
				return null;
			} else {
				return tp.promisify.call(fs, fs.writeFile, stimPath, stim);
			}
		}).then(function(err) {
			if (err) throw err;
			else lemon.submit(token);
		}).catch(function(err) {
			console.error(err);
		});
	});
	
    res.redirect('/status');
});

module.exports = router;
