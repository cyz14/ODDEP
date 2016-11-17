$(function() {
    console.log(1);
    function getState(msg) {
        console.log('getState:', msg);
        if (!msg) {
            $.get('/register/state', function(data, status) {
                console.log(data, status);
                if (data !== 'open' && data !== 'close') {
                    data = 'Server Error'
                }
                $('p#regswitchstate').text(data);
                $('p#regswitchstaterqtime').text(new Date().toLocaleString());
            });
        } else {
            $('p#regswitchstate').text(msg);
            $('p#regswitchstaterqtime').text(new Date().toLocaleString());
        }
    }

    getState();

    $('#regswitchf5btn').click(function() {
        getState();
    });

    var waiting = false;
    function toggleTo() {
        if (waiting) {
            $('#regswitchbtn').attr('disabled', null);
            $('#regswitchbtn').text('切换重试');
        }
    }
    $('#regswitchbtn').click(function() {
        $(this).attr('disabled', true);
        $(this).text('等待响应...');
        waiting = true;
        $.post('/register/toggle', function(data, status) {
            if (data === 'OK') {
                getState();
            } else {
                getState(data);
            }
            $('#regswitchbtn').attr('disabled', null);
            $('#regswitchbtn').text('切换');
        });
    });
});