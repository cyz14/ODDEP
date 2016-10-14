$(function() {
    $('.alert').hide();
    $('#username').change(function() {
        $.get('register/nameexists?username=' + $('#username').val(), function(data, status) {
            console.log(data, status);
            if (data === 'ok') {
                $('#usernameinput').removeClass('has-error');
                $('#usernameinput').addClass('has-success');
                $('.btn').removeClass('disabled');
                $('#alertusername').hide();
            } else {
                $('#usernameinput').removeClass('has-success');
                $('#usernameinput').addClass('has-error');
                $('.btn').addClass('disabled');
                $('#alertusername').show();
            }
        });
    });
});