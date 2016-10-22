var hash = window.location.hash;
var vhdlEditor = ace.edit("vhdlACE");

$(function() {
    // 监视标签切换 - 当从可视化编辑页转移到代码页时，需要更新一次代码
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        var currentTag = $(e.target).attr("href");
        var previousTag = $(e.relatedTarget).attr("href");
        if (currentTag === "#vhdl" && previousTag === "#visual") {
            if (screen.availWidth > 700) {
                document.getElementById("vhdlACE").style.width = Math.floor(screen.availWidth * 0.8);
            }

            var s=toVHDL();
            vhdlEditor.setValue(s);
            vhdlEditor.clearSelection();
        }
    });
});