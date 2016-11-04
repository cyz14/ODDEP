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
	var pid = req.body.pid;
	var tag = req.body.tag;
	console.log('submit:', {
		token: token,
		uid: uid,
		pid: pid,
		tag: tag
	});
	dbtop.submissionRegisterIfNotExists(token, uid, pid, tag, function(err) {
		if (err) {
			console.error(err);
			return ;
		}
		var code = req.body.code.replace(/<br>/g, '\n');
		var stim = req.body.stim.replace(/<br>/g, '\n');
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
			else {
				var opt = {
					pid : pid,
					check : (pid > 1001) // 规定：除了前两道沙盒题，都需要自带激励
				};
				if (stim === '#&!upload>') {
					console.log(stim);
					lemon.submit(token, 1, opt);
				} else {
					console.error('RRRRR');
					lemon.submit(token, 2, opt);
				}
			}
		}).catch(function(err) {
			console.error(err);
		}).then(function() {
			res.send('ok');
		});
	});
});

module.exports = router;
