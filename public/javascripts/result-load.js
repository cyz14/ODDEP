$(function() {
    $.get('/tmp/fileio.vcd', function(data, status) {
        console.log(data);
        console.log(status);
    });

    var token = $('#topdiv').attr('data-token');
    $.get('/tmp/code/' + token + '.vhd', function(data, status) {
        console.log('code preview:', status);
        $('#codePre').text(data);
    });
    $.get('/tmp/log/' + token + '.log', function(data, status) {
        console.log('log preview:', status);
        $('#debugInfo').text(data);
    });

    $('#linkCode').attr('href', '/status/download/code/' + token);
    $('#linkMotivate').attr('href', '/status/download/motivate/' + token);
    $('#linkVCD').attr('href', '/status/download/vcd/' + token);
});