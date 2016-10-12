var editor = ace.edit("vhdlACE");
editor.setTheme("ace/theme/white");
editor.getSession().setMode("ace/mode/vhdl");

$("#motUpl").fileinput({
    language: "zh",
    allowedFileExtensions: ['txt'],
    maxFileSize: 50
});