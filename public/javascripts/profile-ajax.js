$(function() {
    $('.alert').hide();
    $('input').attr('disabled', 1);
    var state = 0;
    if (location.hash === '#ok') {
        $('#alertok').show();
    }
    var isEmptyObj = function(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }
    $('#submitbtn').click(function() {
        $('#alertok').hide();
        $('#alertpwdsend').hide();
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
            console.log(obj);
            if (!isEmptyObj(obj)) {
                $('.alert').hide();
                $.post(location.href + '/update', obj, function(data, status) {
                    console.log(data, status);
                    if (data === 'ok') {
                        if (!location.hash) {
                            location.hash = '#ok';
                        }
                        location.reload(true);
                    } else if (data === 'bad' || status !== 'success') {
                        $('#alertbad').show();
                    } else {
                        $('#alertpwdsend').show();
                    }
                });
            } else {
                console.log(1);
                $('#alertpwdsend').show();
            }
        }
    });

    var checkPwd = function() {
        $('#eldpwdf').removeClass('has-error');
        if ($('#vepasswd').val() === $('#passwd').val()) {
            $('.pwd').removeClass('has-error');
            $('.pwd').addClass('has-success');
            state = 1;
            $('#alertpwd').hide();
            if (!$('#oldpasswd').val()) {
                $('#eldpwdf').addClass('has-error');
            }
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