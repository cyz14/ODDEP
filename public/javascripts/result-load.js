$(function() {
    $.get('/tmp/fileio.vcd', function(data, status) {
        console.log(data);
        console.log(status);
    })
});