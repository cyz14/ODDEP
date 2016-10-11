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

	// chip here
	
	function addChip(chipInfo, layer){
		var chip = new Konva.Group({
			x: chipInfo.position.x,
			y: chipInfo.position.y,
			draggable: true
		});

		var chipName = new Konva.Text({
			x: 10 + chipInfo.position.x,
			y: 10 + chipInfo.position.y,
			text: chipInfo.id,
			fontSize: 25,
			fontFamily: 'Calibri',
			align: 'center'
		});

		var rect = new Konva.Rect({
			x: chipInfo.position.x,
			y: chipInfo.position.y,
			width: 110,
			height: 50,
			fill: '#b0b4ba',
			stroke: 'black',
			strokeWidth: 4
		});

		chip.add(rect);
		chip.add(chipName);

		for(var i = 1; i <= 14; i ++){
			var pin = new Konva.Circle({
				x: chipPinX(chip, i),
				y: chipPinY(chip, i),
				radius: 5,
				fill: 'b0b4ba',
				stroke: 'black',
				strokeWidth: 4
			});
			chip.add(pin);
		}

		chip.on('mouseover', function() {
			document.body.style.cursor = 'pointer';
		});
		chip.on('mouseout', function() {
			document.body.style.cursor = 'default';
		});
		
		
		layer.add(chip);
		//return chip;
	}

	function chipPinX(chip, index){
		if(index <= 7)
			index -= 1;
		else
			index = 14 - index;
		return index * 15 + 10 + chip.attrs.x;
	}

	function chipPinY(chip, index){
		if(index <= 7)
			return 0 + chip.attrs.y;
		return 50 + chip.attrs.y;
	}


	var chipInfos = [
            {id: '74LS00', description: '四-二输入与非门',},
            {id: '74LS04', description: '六反相器'},
            {id: '74LS11', description: '三输入与非门'},
            {id: '74LS14', description: '六反相器（施密特触发）'},
            {id: '74LS20', description: '二-四输入与非门'},
            {id: '74LS27', description: '三-三输入与非门'},
            {id: '74LS86', description: '四-二输入异或门'},
            {id: '74LS74', description: '双D触发器（正沿触发）'},
            {id: '74LS75', description: '四位双稳态锁存器'},
            {id: '74LS85', description: '4位数值比较器'},
            {id: '74LS90', description: '二-五-十进制计数器'},
            {id: '74LS125', description: '三态输出四总线缓冲器'},
            {id: '74LS161', description: '4位二进制同步计数器'},
            {id: '74LS253', description: '双4选1数据选择器'}
    ];

	// END_OF_CHIP
	
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
	
	for(var i = 0; i < 14; i ++) {
		addStar(layer, stage);
		var info = chipInfos[i];
		info.position = {
			x: 10 + Math.floor(i / 5) * 70,
			y: (50 + 20) * (i % 5) + 10
		};
		addChip(info, layer);
	}
	
	stage.add(layer, dragLayer);
	//
	//stage.on('dragstart', function(evt) {
	//	var shape = evt.target;
	//	// moving to another layer will improve dragging performance
	//	shape.moveTo(dragLayer);
	//	stage.draw();
	//	
	//	if (tween) {
	//	  tween.pause();
	//	}
	//	shape.setAttrs({
	//	  shadowOffset: {
	//	    x: 15,
	//	    y: 15
	//	  },
	//	  scale: {
	//	    x: shape.getAttr('startScale') * 1.2,
	//	    y: shape.getAttr('startScale') * 1.2
	//	  }
	//	});
	//});

	//stage.on('dragend', function(evt) {
	//	var shape = evt.target;
	//	shape.moveTo(layer);
	//	stage.draw();
	//	shape.to({
	//		duration: 0.5,
	//		easing: Konva.Easings.ElasticEaseOut,
	//		scaleX: shape.getAttr('startScale'),
	//		scaleY: shape.getAttr('startScale'),
	//		shadowOffsetX: 5,
	//		shadowOffsetY: 5
	//	});
	//});

	// draw codes above

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
