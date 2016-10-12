var hash = window.location.hash;
var vhdlEditor = ace.edit("vhdlACE");
if (hash) {
    $('#editorTab a[href=' + hash + ']').tab('show');
}

function submitCodeToSim() {
    var code = document.getElementById('banana');
    //code.value = document.getElementById('vhdlCode').textContent;
    code.value = vhdlEditor.getValue();
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

    function addChip(chipInfo, layer) {
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

        for (var i = 1; i <= 14; i++) {
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

    function chipPinX(chip, index) {
        if (index <= 7)
            index -= 1;
        else
            index = 14 - index;
        return index * 15 + 10 + chip.attrs.x;
    }

    function chipPinY(chip, index) {
        if (index <= 7)
            return 0 + chip.attrs.y;
        return 50 + chip.attrs.y;
    }


    var chipInfos = [
        { id: '74LS00', description: '四-二输入与非门', },
        { id: '74LS04', description: '六反相器' },
        { id: '74LS11', description: '三输入与非门' },
        { id: '74LS14', description: '六反相器（施密特触发）' },
        { id: '74LS20', description: '二-四输入与非门' },
        { id: '74LS27', description: '三-三输入与非门' },
        { id: '74LS86', description: '四-二输入异或门' },
        { id: '74LS74', description: '双D触发器（正沿触发）' },
        { id: '74LS75', description: '四位双稳态锁存器' },
        { id: '74LS85', description: '4位数值比较器' },
        { id: '74LS90', description: '二-五-十进制计数器' },
        { id: '74LS125', description: '三态输出四总线缓冲器' },
        { id: '74LS161', description: '4位二进制同步计数器' },
        { id: '74LS253', description: '双4选1数据选择器' }
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
                x: scale,
                y: scale
            },
            rotation: Math.random() * 180,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffset: {
                x: 5,
                y: 5
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

    for (var i = 0; i < 14; i++) {
        //addStar(layer, stage);
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

    /*       以下为转VHDL的测试输入       */
    //测试用全加器元件导线list
    var List={
        "componentDataArray":[
        {"name":"and1","category":"and"},
        {"name":"and2","category":"and"},
        {"name":"xor1","category":"xor"},
        {"name":"xor2","category":"xor"},
        {"name":"or1","category":"or"},
        {"name":"input1","category":"input"},
        {"name":"input2","category":"input"},
        {"name":"input3","category":"input"},
        {"name":"output1","category":"output"},
        {"name":"output2","category":"output"}
        ],
        "linkDataArray":[
        {"from":"input1","fromPort":"","to":"xor1","toPort":"in1"},
        {"from":"input1","fromPort":"","to":"and1","toPort":"in1"},
        {"from":"input2","fromPort":"","to":"xor1","toPort":"in2"},
        {"from":"input2","fromPort":"","to":"and1","toPort":"in2"},
        {"from":"input3","fromPort":"","to":"xor2","toPort":"in2"},
        {"from":"input3","fromPort":"","to":"and2","toPort":"in2"},
        {"from":"xor1","fromPort":"out1","to":"xor2","toPort":"in1"},
        {"from":"xor1","fromPort":"out1","to":"and2","toPort":"in1"},
        {"from":"xor2","fromPort":"out1","to":"output1","toPort":""},
        {"from":"and1","fromPort":"out1","to":"or1","toPort":"in1"},
        {"from":"and2","fromPort":"out1","to":"or1","toPort":"in2"},
        {"from":"or1","fromPort":"out1","to":"output","toPort":""}
        ]
    };
    //添加entity中port部分
    function entityPort(string){
        var flagIn=0;
        var flagOut=0;
        for(var i=0;i<List.componentDataArray.length;i++){
            if (List.componentDataArray[i].category=="input"){
                if(flagIn==0)
                    string=string+"    PORT(\n        "+List.componentDataArray[i].name;
                else
                    string=string+","+List.componentDataArray[i].name;
                flagIn++;
            }
        }
        if(flagIn!=0)
            string=string+":in STD_LOGIC";
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="output"){
                if(flagIn+flagOut==0)
                    string=string+"    PORT(\n        "+List.componentDataArray[i].name;
                else if(flagOut==0)
                    string=string+";\n        "+List.componentDataArray[i].name;
                else
                    string=string+","+List.componentDataArray[i].name;
                flagOut++;
            }
        }
        if(flagOut!=0)
            string=string+":out STD_LOGIC";
        if(flagIn+flagOut!=0)
            string=string+"\n    );\n";
        return string;
    }
    //添加component部分（伪）
    function archComp(string){
        var comp={};
        var len=0;
        for(var i=0;i<List.componentDataArray.length;i++){
            if((List.componentDataArray[i].category!="input")&&(List.componentDataArray[i].category!="output")){
                if(len>0){
                    var flag=0;
                    for(var j=0;j<len;j++){
                        if(comp[j]==List.componentDataArray[i].category)
                        {flag=1;break;}
                    }
                    if(flag==0)
                    {comp[len]=List.componentDataArray[i].category;len++; }                    
                }
                else
                {comp[len]=List.componentDataArray[i].category;len++; }           
            }
        }
        for(var i=0;i<len;i++){
            string=string+"    COMPONENT "+comp[i]+"_0\n        PORT(\n            in1,in2:in STD_LOGIC;\n            out1:out STD_LOGIC\n        );\n    END COMPONENT;\n";
        }
        return string;
    }
    //添加需要的signal
    function archSignal(string){
        var signal={};
        var len=0;
        for (var i=0;i<List.linkDataArray.length;i++){            
            if(List.linkDataArray[i].fromPort!=""){
                if(len>0){
                    var flag=0;
                    for(var j=0;j<len;j++){
                        if(signal[j]==List.linkDataArray[i].from+"_"+List.linkDataArray[i].fromPort)
                            {flag=1;break;}
                    }
                    if(flag==0)
                        {signal[len]=List.linkDataArray[i].from+"_"+List.linkDataArray[i].fromPort;len++;}
                }
                else
                {signal[len]=List.linkDataArray[i].from+"_"+List.linkDataArray[i].fromPort;len++;}
            }
            if(List.linkDataArray[i].toPort!=""){
                if(len>0){
                    var flag=0;
                    for(var j=0;j<len;j++){
                        if(signal[j]==List.linkDataArray[i].to+"_"+List.linkDataArray[i].toPort)
                            {flag=1;break;}
                    }
                    if(flag==0)
                        {signal[len]=List.linkDataArray[i].to+"_"+List.linkDataArray[i].toPort;len++;}
                }
                else
                {signal[len]=List.linkDataArray[i].to+"_"+List.linkDataArray[i].toPort;len++;}
            }
        }
        if(len!=0){
            string=string+"    SIGNAL ";
            for(var i=0;i<len;i++){
                if(i!=0)
                    string=string+",";
                string=string+signal[i];
            }
            string=string+":STD_LOGIC;\n"
        }
        return string;
    }
    //添加实体语句，包括component应用和连线翻译成语句
    function archBegin(string){
        var num=1;
        for(var i=0;i<List.componentDataArray.length;i++){
            if((List.componentDataArray[i].category!="input")&&(List.componentDataArray[i].category!="output")){
                string=string+"    u"+num+":"+List.componentDataArray[i].category+"_0 PORT MAP("+List.componentDataArray[i].name+"_in1,"+List.componentDataArray[i].name+"_in2,"+List.componentDataArray[i].name+"_out1);\n";
                num++;
            }
        }
        for(var i=0;i<List.linkDataArray.length;i++){
            var s1;var s2;
            if(List.linkDataArray[i].toPort=="")
                s1=List.linkDataArray[i].to;
            else
                s1=List.linkDataArray[i].to+"_"+List.linkDataArray[i].toPort;
            if(List.linkDataArray[i].fromPort=="")
                s2=List.linkDataArray[i].from;
            else
                s2=List.linkDataArray[i].from+"_"+List.linkDataArray[i].fromPort;
            string=string+"    "+s1+" <= "+s2+";\n";
        }
        return string;
    }

    function toVHDL(){
        var lib="library IEEE;\nUSE IEEE.STD_LOGIC_1164.ALL;\nUSE IEEE.STD_LOGIC_ARITH.ALL;\nUSE IEEE.STD_LOGIC_UNSIGNED.ALL;\n\n";
        var entity="entity digitalEO is\n";
        entity=entityPort(entity);
        entity=entity+"end entity;\n\n";
        var arch="architecture eo_digital of digitalEO is\n";
        arch=archComp(arch);
        arch=archSignal(arch);
        arch=arch+"begin\n";
        arch=archBegin(arch);
        arch=arch+"end eo_digital;";
        var s=lib+entity+arch;
        vhdlEditor.setValue(s);
    }

    // 提交代码
    $('#codeSubmit').click(function() {
        submitCodeToSim();
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
            toVHDL();

            //vhdlEditor.setValue("library IEEE;\nUSE IEEE.STD_LOGIC_1164.ALL;\nUSE IEEE.STD_LOGIC_ARITH.ALL;\nUSE IEEE.STD_LOGIC_UNSIGNED.ALL;\n\nentity digitalEO is\n    port(\n        oe:in STD_LOGIC;\n        six6:out STD_LOGIC;\n        six7:out STD_LOGIC;\n        egt8:out STD_LOGIC;\n        egt9:out STD_LOGIC;\n        eiA:out STD_LOGIC;\n        eiB:out STD_LOGIC\n        );\nend entity;\n\narchitecture eo_digital of digitalEO is\nbegin\n    six6 <= not oe;\n    egt8 <= not oe;\n    eiA <= not oe;\n    six7 <= oe;\n    egt9 <= oe;\n    eiB <= oe;\nend eo_digital;")
        }
    });
});