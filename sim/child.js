var sys = require('sys')
var exec = require('child_process').exec;
/*var cmd='cd'+' '+'fielo'+'&&'+
'vlib'+' '+'work'+' &&'+
'vcom'+' '+'fileio.vhd'+
' '+'gen.vhd'+' &&'+
'vsim'+' '+'-c'+' '+'-do'+' '+'fileio.do'+' '+'fileio';*/
var cmd='cd sim && vlib work && vcom fileio.vhd gen.vhd && vsim -c -do fileio.do fileio';

exports.sim = function() {
exec(cmd, function (error, stdout, stderr) {
　sys.print('stdout： ' + stdout);
　sys.print('stderr： ' + stderr);
　if (error !== null) {
　console.log('exec error： ' + error);
　　}
　　});
};
