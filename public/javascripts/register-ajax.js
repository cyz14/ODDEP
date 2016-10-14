$(function() {
    var submit_available = true;
    $('.alert-danger').hide();
    $('#username').change(function() {
        $.get('register/nameexists?username=' + $('#username').val(), function(data, status) {
            console.log(data, status);
            if (data === 'ok') {
                $('#usernameinput').removeClass('has-error');
                $('#usernameinput').addClass('has-success');
                $('.btn').removeClass('disabled');
                $('#alertusername').hide();
                submit_available = true;
            } else {
                $('#usernameinput').removeClass('has-success');
                $('#usernameinput').addClass('has-error');
                $('.btn').addClass('disabled');
                $('#alertusername').show();
                submit_available = false;
            }
        });
    });
    $('#registerbtn').click(function() {
        console.log(submit_available);
        if (submit_available) {
            $.post("", {
                username:$('#username').val(),
                nickname:$('#nickname').val(),
                password:$('#password').val()
            }, function(data, status) {
                console.log(data, status);
                if (data === 'ok') {
                    location.href = '/';
                } else {
                    $('#failed').show();
                }
            });
        }
    });
});