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

	var width = window.innerWidth;
	var height = window.innerHeight;
	
	var tween = null;
	
	function addStar(layer, stage) {
	var scale = Math.random();
	
	var star = new Konva.Star({
	x: Math.random() * stage.getWidth(),
	y: Math.random() * stage.getHeight(),
	numPoints: 5,
	innerRadius: 30,
	outerRadius: 50,
	fill: '#89b717',
	opacity: 0.8,
	draggable: true,
	scale: {
	  x : scale,
	  y : scale
	},
	rotation: Math.random() * 180,
	shadowColor: 'black',
	shadowBlur: 10,
	shadowOffset: {
	  x : 5,
	  y : 5
	},
	shadowOpacity: 0.6,
	// custom attribute
	startScale: scale
});

layer.add(star);
}
var stage = new Konva.Stage({
	container: 'konvaContainer',
	width: $("#konvaContainer").width(),
	height: 500
});

var layer = new Konva.Layer();
var dragLayer = new Konva.Layer();

for(var n = 0; n < 30; n++) {
addStar(layer, stage);
}

stage.add(layer, dragLayer);

stage.on('dragstart', function(evt) {
	var shape = evt.target;
	// moving to another layer will improve dragging performance
	shape.moveTo(dragLayer);
	stage.draw();
	
	if (tween) {
	  tween.pause();
	}
	shape.setAttrs({
	  shadowOffset: {
	    x: 15,
	    y: 15
	  },
	  scale: {
	    x: shape.getAttr('startScale') * 1.2,
	    y: shape.getAttr('startScale') * 1.2
	  }
	});
});

stage.on('dragend', function(evt) {
	var shape = evt.target;
	shape.moveTo(layer);
	stage.draw();
	shape.to({
		duration: 0.5,
		easing: Konva.Easings.ElasticEaseOut,
		scaleX: shape.getAttr('startScale'),
		scaleY: shape.getAttr('startScale'),
		shadowOffsetX: 5,
		shadowOffsetY: 5
	});
});
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
