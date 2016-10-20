$(function() {
    window.onhashchange = function() {
        if (!location.hash) return ;
        console.log(location.hash);
        var locateH = {
            '#left': -1,
            '#right': -2,
            '#backward': -3,
            '#forward': -4
        };
        var index = parseInt($('#index').text());
        var op = locateH[location.hash];
        console.log(index, op);
        if (op === undefined) op = parseInt(location.hash.substr(1));
        console.log(op);
        switch(op) {
            case -1:
            if (index > 1) -- index;
            break;
            case -2:
            ++ index;
            break;
            case -3:
            index = 1;
            break;
            case -4:
            index = 0;
            break;
            default:
            index = op;
            break;
        }
        console.log(index);
        $('#cIndex').val(index);
        $('#car').submit();
    };

    // 给filter回填数据
    $('#cIndex').val(parseInt($('#index').text()));
    var arg = location.href.match(/user=\w+/);
    if (arg && arg.length > 0) {
        $('#userfilter').val(arg[0].substr(5));
    }
    
    // 给表列做链接
    $('table > tbody > tr').click(function() {
        console.log('clicked');
        window.open($(this).find('a').attr('href'));
    })
});