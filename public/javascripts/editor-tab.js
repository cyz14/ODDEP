var hash = window.location.hash;
var vhdlEditor = ace.edit("vhdlACE");
if (hash) {
    $('#editorTab a[href=' + hash + ']').tab('show');
}

function getTimeToken() {
    return Math.random().toString(36).substr(2) + ':' + new Date().getTime();
}

function submitCodeToSim(token) {
    $('#mike').val(token);
    $('#banana').val(vhdlEditor.getValue());
    var stim = $('#kevin');
    if ($('#motUpl').val()) {
        stim.val("#&!upload>");
    } else {
        stim.val($('#stimCode').val());
    }
    $('#car').submit();
}

$(function() {
    // 提交代码
    $('#codeSubmit').click(function() {
        var token = getTimeToken();
        console.log(token);
        if ($('#motUpl').val()) {
            var uurl = $('#bigbus').attr('action');
            $('#bigbus').attr('action', uurl + '/' + token);
            $('#bigbus').submit();
        }
        submitCodeToSim(token);
    });

    // 监视标签切换 - 当从可视化编辑页转移到代码页时，需要更新一次代码
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        var currentTag = $(e.target).attr("href");
        var previousTag = $(e.relatedTarget).attr("href");
        if (currentTag === "#vhdl" && previousTag === "#visual") {
            if (screen.availWidth > 700) {
                document.getElementById("vhdlACE").style.width = Math.floor(screen.availWidth * 0.8);
            }
            // 将可视化结构转换为VHDL代码
            // 
            vhdlEditor.setValue("library IEEE;\nUSE IEEE.STD_LOGIC_1164.ALL;\nUSE IEEE.STD_LOGIC_ARITH.ALL;\nUSE IEEE.STD_LOGIC_UNSIGNED.ALL;\n\nentity digitalEO is\n    port(\n        oe:in STD_LOGIC;\n        six6:out STD_LOGIC;\n        six7:out STD_LOGIC;\n        egt8:out STD_LOGIC;\n        egt9:out STD_LOGIC;\n        eiA:out STD_LOGIC;\n        eiB:out STD_LOGIC\n        );\nend entity;\n\narchitecture eo_digital of digitalEO is\nbegin\n    six6 <= not oe;\n    egt8 <= not oe;\n    eiA <= not oe;\n    six7 <= oe;\n    egt9 <= oe;\n    eiB <= oe;\nend eo_digital;");
        }
    });
});