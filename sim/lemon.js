var proc = require('child_process');
var fs = require('fs');
var updSP = require('../db/dbtop').updStatPromise;
var tp = require('../tiny-promise');

var sim = function(args, next) {
    updSP(args.token, 'running').then(function(err) {
        return tp.promisify(proc.execFile, './sim/sim.sh', [args.codePath, args.stimPath, args.resPath], {cwd:'.'})
    })
    .then(tp.spread(function(err, stdout, stderr) {
        if (err) {
            console.log('stdout:', stdout,'stderr:', stderr);
            throw {
                err : err,
                stdout : stdout,
                stderr : stderr
            };
        }
        return tp.promisify(fs.writeFile, args.logPath, stdout + '\n' + stderr);
    }))
    .then(function(err) {
        if (err) {
            console.error(err);
            return updSP(args.token, 'failed');
        } else {
            return updSP(args.token, 'done');
        }
    },function(err) {
        if (typeof(err.stdout) !== 'undefined') {
            return tp.promisify(fs.writeFile, args.logPath, stdout + '\n' + stderr)
                .then(function(err) {
                    if (err) throw err;
                    return updSP(token, 'failed');
                });
        } else {
            console.error(err);
        }
    }).then(next);
};

var lemon = (function() {
    var status = 0;
    var queue = [];
    var map = {};
    var obj = {};
    var touch = function() {
        console.log('queue:', queue);
        console.log('map:', map);
        if (status === 0 && queue.length > 0 && map[queue[0]] === 2) {
            status = 1;
            var token = queue.shift();
            delete map[token];
            console.log('Submit Running:', token);
            sim({
                token : token,
                codePath : './public/tmp/code/' + token + '.vhd',
                stimPath : './public/tmp/motivate/' + token + '.vhd',
                resPath : './public/tmp/vcd/' + token + '.vcd',
                logPath : './public/tmp/log/' + token + '.log'
            }, function() {
                console.log('Submit Done:', token);
                status = 0;
                touch();
            })
        }
    }
    obj.submit = function(token, step) {
        if (typeof(map[token]) === 'undefined') {
            map[token] = step;
            queue.push(token);
        } else {
            map[token] += step;
        }
        touch();
    }
    return obj;
}());

module.exports = lemon;