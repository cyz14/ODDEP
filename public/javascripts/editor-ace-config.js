$(function() {
    var editor = ace.edit("vhdlACE");
    editor.setTheme("ace/theme/monokai");//white
    editor.getSession().setMode("ace/mode/vhdl");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    });

    $("#motUpl").fileinput({
        language: "zh",
        allowedFileExtensions: ['vhd'],
        maxFileSize: 50
    });

    function getTimeToken() {
        return Math.random().toString(36).substr(2) + ':' + new Date().getTime();
    };

    function brTagConvert(str) {
        return str.replace(/\n|\r\n/g, '<br>');
    };

    function submitCodeToSim(token) {
        $('#mike').val(token);
        $('#banana').val(brTagConvert(editor.getValue()));
        var stim = $('#kevin');
        if ($('#motUpl').val() || $('#probid').val() !== '1000') {
            stim.val("#&!upload>");
        } else {
            stim.val(brTagConvert($('#stimCode').val()));
        }
        $('#car').submit();
    };

    // 提交代码
    $('#codeSubmit').click(function() {
        if (!checkProbID()) {
            alert('题目id不合法');
            return ;
        }
        var token = getTimeToken();
        console.log(token);
        if ($('#motUpl').val()) {
            var uurl = $('#bigbus').attr('action');
            $('#bigbus').attr('action', uurl + '/' + token);
            console.log('file upload!');
            $('#bigbus').submit();
        }
        console.log('code submit!');
        submitCodeToSim(token);
    });

    function checkProbID() {
        var r = /^[1-9]\d\d\d$/;
        return r.test($('#probid').val());
    }
    $('#probid').change(function() {
        if (!checkProbID()) {
            $('#probid').val(1000);
            alert('题目id不合法，自动改为默认值');
        }
    });
});