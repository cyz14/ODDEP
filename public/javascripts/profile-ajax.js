$(function() {
    $('.alert').hide();
    $('input').attr('disabled', 1);
    var state = 0;
    $('#submitbtn').click(function() {
        if (state === 0) {
            state = 1;
            $('input').attr('disabled', null);
            $('#submitbtn').text('更改');
            $('#submitbtn').removeClass('btn-primary');
            $('#submitbtn').addClass('btn-warning');
        } else {
            var obj = {};
            if ($('#nickname').val()) {
                obj.nickname = $('#nickname').val();
            }
            if ($('#passwd').val()) {
                obj.newpasswd = $('#passwd').val();
                obj.passwd = $('#oldpasswd').val();
            }
            if (obj) {
                $('.alert').hide();
                $.post(location.href + '/update', obj, function(data, status) {
                    if (data === 'ok') {
                        location.reload(true);
                    } else if (data === 'bad') {
                        $('#alertbad').show();
                    }
                });
            }
        }
    });

    var checkPwd = function() {
        if ($('#vepasswd').val() === $('#passwd').val()) {
            $('.pwd').removeClass('has-error');
            $('.pwd').addClass('has-success');
            state = 1;
            $('#alertpwd').hide();
        } else {
            $('.pwd').removeClass('has-success');
            $('.pwd').addClass('has-error');
            state = 2;
            $('#alertpwd').show();
        }
    };
    $('#passwd').change(function() {
        if ($('#vepasswd').val()) {
            checkPwd();
        }
    });
    $('#vepasswd').change(checkPwd);
});