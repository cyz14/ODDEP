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
});