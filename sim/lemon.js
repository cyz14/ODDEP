var proc = require('child_process');
var fs = require('fs');

var sim = function(args, next) {
    proc.execFile('./sim/sim.sh', [args.codePath, args.stimPath, args.resPath],
    {cwd:'.'}, function(err, stdout, stderr) {
        if (err) {
            console.error(err);
            console.log(stdout, stderr);
            next();
            return ;
        }
        fs.writeFile(args.logPath, stdout + '\n' + stderr, function(err) {
            if (err) console.error(err);
            next();
        });
    });
};

var lemon = (function() {
    var status = 0;
    var queue = [];
    var obj = {};
    var touch = function() {
        if (status === 0 && queue.length > 0) {
            status = 1;
            var token = queue.shift();
            console.log('Submit Running:', token);
            sim({
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
    obj.submit = function(token) {
        queue.push(token);
        touch();
    }
    return obj;
}());

module.exports = lemon;