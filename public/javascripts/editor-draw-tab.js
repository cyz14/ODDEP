var hash = window.location.hash;
var vhdlEditor = ace.edit("vhdlACE");

$(function() {
    $('body').css('min-height', '0px');
    $('#jumpToVHDL').click(function() {
    });
    function hashBody() {
        var hash = location.hash;
        console.log(hash);
        if (hash === '#visual' || hash === '#vhdl') {
            $('#editorTab a[href="' + hash + '"]').tab('show');
        }
        if (hash === '#visual') {
            $('body').css('overflow', 'scroll');
            $('nav').focus();
        } else if (hash === '#vhdl') {
            $('body').css('overflow', 'auto');
        }
    }
    hashBody();
    window.onhashchange = hashBody;
});