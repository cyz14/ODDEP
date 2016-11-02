var hash = window.location.hash;
var vhdlEditor = ace.edit("vhdlACE");

$(function() {
    $('body').css('min-height', '0px');
    $('#jumpToVHDL').click(function() {
        location.hash = 'vhdl';
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
    // 监视标签切换 - 当从可视化编辑页转移到代码页时，需要更新一次代码
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        var currentTag = $(e.target).attr("href");
        var previousTag = $(e.relatedTarget).attr("href");
        location.hash = currentTag;
        if (currentTag === "#vhdl" && previousTag === "#visual") {
            if (screen.availWidth > 700) {
                document.getElementById("vhdlACE").style.width = Math.floor(screen.availWidth * 0.8);
            }
            
            var writer = new draw2d.io.json.Writer();
            var result = null;
            writer.marshal(app.view, function(json) {
                var s = toVHDL(simplifyJSON(json));
                vhdlEditor.setValue(s);
                vhdlEditor.clearSelection();
            });
            
        }
    });
});