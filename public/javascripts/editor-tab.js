var hash = window.location.hash;
if (hash) {
    $('#editorTab a[href=' + hash + ']').tab('show');
}

function submitCodeToSim() {
    var code = document.getElementById('banana');
    code.value = document.getElementById('vhdlCode').textContent;
    var stim = document.getElementById('kevin');
    stim.value = document.getElementById('stimCode').value;
    var form = document.getElementById('car');
    form.submit();
}

$(function() {
    // 提交代码
    $('#codeSubmit').click(function() {
        submitCodeToSim();
    });

    // 监视标签切换 - 当从可视化编辑页转移到代码页时，需要更新一次代码
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        var currentTag = $(e.target).attr("href");
        var previousTag = $(e.relatedTarget).attr("href");
        if (currentTag === "#vhdl" && previousTag === "#visual") {
            // 将可视化结构转换为VHDL代码
            // 
            $('#vhdlCode').text("LIBRARY IEEE;\nUSE IEEE.STD_LOGIC_1164.ALL;\nUSE IEEE.STD_LOGIC_ARITH.ALL;\nUSE IEEE.STD_LOGIC_UNSIGNED.ALL;\n\nentity digitalEO is\n    port(\n        oe:in STD_LOGIC;\n        six6:out STD_LOGIC;\n        six7:out STD_LOGIC;\n        egt8:out STD_LOGIC;\n        egt9:out STD_LOGIC;\n        eiA:out STD_LOGIC;\n        eiB:out STD_LOGIC\n        );\nend entity;\n\narchitecture eo_digital of digitalEO is\nbegin\n    six6 <= not oe;\n    egt8 <= not oe;\n    eiA <= not oe;\n    six7 <= oe;\n    egt9 <= oe;\n    eiB <= oe;\nend eo_digital;")
        }
    });
});