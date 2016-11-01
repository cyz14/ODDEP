$(function() {
    var editor = ace.edit('editor');
    editor.setTheme("ace/theme/eclipse");
    editor.getSession().setMode('ace/mode/html');
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });

    var plain = false;

    $('input[type="radio"][value="html"]').click(function() {
        editor.getSession().setMode('ace/mode/html');
        plain = false;
    });
    $('input[type="radio"][value="plain"]').click(function() {
        editor.getSession().setMode('ace/mode/plain_text');
        plain = true;
    });

    $('#submitbtn').click(function() {
        $(this).attr('disabled', true);
        $(this).removeClass('btn-danger');
        $(this).addClass('btn-success');
        $(this).text('已提交，等待响应中');
        var text = editor.getValue();
        if (plain) {
            text = text.replace(/\r\n|\n/g, '<br>');
        }
        $.post(location.href, {
            title: $('#titleInput').val(),
            source: $('#sourceInput').val(),
            description: text
        }, function(data, status) {
            console.log(status);
            if (status === 'success') {
                location.href = location.href.replace('edit/', '');
            } else {
                alert(status);
            }
        });
    })
});