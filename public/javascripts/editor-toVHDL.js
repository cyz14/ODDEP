//var fs=require('fs');
//fs.writeFileSync('./output.json',JSON.stringify({a:1,b:2}));
//var file="/Users/ning/Desktop/SwPrj/prj7_tot/public/chips/json/one_bit_adder.json";
//var result=JSON.parse(fs.readFileSync(file));
/*       以下为转VHDL的测试输入       */
var chipInfos = [
    { "id": "74LS00",   "description": "四-二输入与非门",       
    "pin":{"in":["port1","port2","port4","port5","port7","port9","port10","port12","port13","port14"],"out":["port3","port6","port8","port11"],"buffer":[]}
    },
    { "id": "74LS04",   "description": "六反相器",             
    "pin":{"in":["port1","port3","port5","port7","port9","port11","port13","port14"],"out":["port2","port4","port6","port8","port10","port12"],"buffer":[]}
    },
    { "id": "74LS11",   "description": "三输入与门",            
    "pin":{"in":["port1","port2","port3","port4","port5","port7","port9","port10","port11","port13","port14"],"out":["port6","port8","port12"],"buffer":[]}
    },
    { "id": "74LS14",   "description": "六反相器（施密特触发）", 
    "pin":{"in":["port1","port3","port5","port7","port9","port11","port13","port14"],"out":["port2","port4","port6","port8","port10","port12"],"buffer":[]}
    },
    { "id": "74LS20",   "description": "二-四输入与非门",       
    "pin":{"in":["port1","port2","port3","port4","port5","port7","port9","port10","port11","port12","port13","port14"],"out":["port6","port8"],"buffer":[]}
    },
    { "id": "74LS27",   "description": "三-三输入与非门",       
    "pin":{"in":["port1","port2","port3","port4","port5","port7","port9","port10","port11","port13","port14"],"out":["port6","port8","port12"],"buffer":[]}
    },
    { "id": "74LS86",   "description": "四-二输入异或门",       
    "pin":{"in":["port1","port2","port4","port5","port7","port9","port10","port12","port13","port14"],"out":["port3","port6","port8","port11"],"buffer":[]}
    },
    { "id": "74LS74",   "description": "双D触发器（正沿触发）",  
    "pin":{"in":["port1","port2","port3","port4","port7","port10","port11","port12","port13","port14"],"out":["port5","port6","port8","port9"],"buffer":[]}
    },
    { "id": "74LS75",   "description": "四位双稳态锁存器",       
    "pin":{"in":["port2","port3","port4","port5","port6","port7","port12","port13"],"out":["port1","port8","port9","port10","port11","port14","port15","port16"],"buffer":[]}
    },
    { "id": "74LS85",   "description": "4位数值比较器",         
    "pin":{"in":["port1","port2","port3","port4","port8","port9","port10","port11","port12","port13","port14","port15","port16"],"out":["port5","port6","port7"],"buffer":[]}
    },
    { "id": "74LS90",   "description": "二-五-十进制计数器",     
    "pin":{"in":["port1","port2","port3","port4","port5","port6","port7","port10","port13","port14"],"out":["port8","port9","port11","port12"],"buffer":[]}
    },
    { "id": "74LS125",  "description": "三态输出四总线缓冲器",   
    "pin":{"in":["port1","port2","port4","port5","port7","port9","port10","port12","port13","port14"],"out":["port3","port6","port8","port11"],"buffer":[]}
    },
    { "id": "74LS161",  "description": "4位二进制同步计数器",    
    "pin":{"in":["port1","port2","port3","port4","port5","port6","port7","port8","port9","port10","port16"],"out":["port11","port12","port13","port14","port15"],"buffer":[]}
    },
    { "id": "74LS253",  "description": "双4选1数据选择器",      
    "pin":{"in":["port1","port2","port3","port4","port5","port6","port8","port10","port11","port12","port13","port14","port15","port16"],"out":["port7","port9"],"buffer":[]}
    }
];
//测试用全加器元件导线list
var List={
    "componentDataArray":[
    {"name":"vcc","category":"vcc","pin":{
        "port1":["line1","line2","line3"]
    }},
    {"name":"gnd","category":"gnd","pin":{
        "port1":["line9","line14"]
    }},
    {"name":"74LS00_1","category":"74LS00","pin":{
        "port1":["line4"],
        "port2":["line5"],
        "port3":["line6"],
        "port4":["line6"],
        "port5":["line7"],
        "port6":["line8"],
        "port7":["line9"],
        "port8":["line10"],
        "port9":["line11"],
        "port10":["line12"],
        "port11":["line13"],
        "port12":["line3"],
        "port13":["line10"],
        "port14":["line2"]
    }},
    {"name":"74LS86_1","category":"74LS86","pin":{
        "port1":["line15"],
        "port2":["line16"],
        "port3":["line17"],
        "port4":[],
        "port5":[],
        "port6":[],
        "port7":["line14","line18"],
        "port8":["line19"],
        "port9":["line11","line20"],
        "port10":["line12","line21"],
        "port11":["line21"],
        "port12":["line5","line22"],
        "port13":["line4","line23"],
        "port14":["line7","line24","line15","line1"]
    }},
    {"name":"74LS27_1","category":"74LS27","pin":{
        "port1":["line13"],
        "port2":["line25"],
        "port3":["line16"],
        "port4":[],
        "port5":[],
        "port6":[],
        "port7":[],
        "port8":[],
        "port9":[],
        "port10":[],
        "port11":[],
        "port12":[],
        "port13":["line8"],
        "port14":["line24"]
    }},
    {"name":"input_1","category":"input","pin":{
        "port1":["line23"]
    }},
    {"name":"input_2","category":"input","pin":{
        "port1":["line22"]
    }},
    {"name":"input_3","category":"input","pin":{
        "port1":["line20"]
    }},
    {"name":"output_1","category":"output","pin":{
        "port1":["line19"]
    }},
    {"name":"output_2","category":"output","pin":{
        "port1":["line17"]
    }}
    ],
    "linkDataArray":[
    {"name":"line1","from":"vcc","fromPort":"port1","to":"74LS86_1","toPort":"port14"},
    {"name":"line2","from":"vcc","fromPort":"port1","to":"74LS00_1","toPort":"port14"},
    {"name":"line3","from":"vcc","fromPort":"port1","to":"74LS00_1","toPort":"port12"},
    {"name":"line4","from":"74LS00_1","fromPort":"port1","to":"74LS86_1","toPort":"port13"},
    {"name":"line5","from":"74LS00_1","fromPort":"port2","to":"74LS86_1","toPort":"port12"},
    {"name":"line6","from":"74LS00_1","fromPort":"port3","to":"74LS00_1","toPort":"port4"},
    {"name":"line7","from":"74LS00_1","fromPort":"port5","to":"74LS86_1","toPort":"port14"},
    {"name":"line8","from":"74LS00_1","fromPort":"port6","to":"74LS27_1","toPort":"port13"},
    {"name":"line9","from":"74LS00_1","fromPort":"port7","to":"gnd","toPort":"port1"},
    {"name":"line10","from":"74LS00_1","fromPort":"port8","to":"74LS00_1","toPort":"port13"},
    {"name":"line11","from":"74LS00_1","fromPort":"port9","to":"74LS86_1","toPort":"port9"},
    {"name":"line12","from":"74LS00_1","fromPort":"port10","to":"74LS86_1","toPort":"port10"},
    {"name":"line13","from":"74LS00_1","fromPort":"port11","to":"74LS27_1","toPort":"port1"},
    {"name":"line14","from":"gnd","fromPort":"port1","to":"74LS86_1","toPort":"port7"},
    {"name":"line15","from":"74LS86_1","fromPort":"port1","to":"74LS86_1","toPort":"port14"},
    {"name":"line16","from":"74LS86_1","fromPort":"port2","to":"74LS27_1","toPort":"port3"},
    {"name":"line17","from":"74LS86_1","fromPort":"port3","to":"output_2","toPort":"port1"},
    {"name":"line18","from":"74LS86_1","fromPort":"port7","to":"74LS27_1","toPort":"port7"},
    {"name":"line19","from":"74LS86_1","fromPort":"port8","to":"output_1","toPort":"port1"},
    {"name":"line20","from":"74LS86_1","fromPort":"port9","to":"input_3","toPort":"port1"},
    {"name":"line21","from":"74LS86_1","fromPort":"port10","to":"74LS86_1","toPort":"port11"},
    {"name":"line22","from":"74LS86_1","fromPort":"port12","to":"input_2","toPort":"port1"},
    {"name":"line23","from":"74LS86_1","fromPort":"port13","to":"input_1","toPort":"port1"},
    {"name":"line24","from":"74LS86_1","fromPort":"port14","to":"74LS27_1","toPort":"port14"},
    {"name":"line25","from":"74LS27_1","fromPort":"port2","to":"74LS27_1","toPort":"port7"}
    ]
};
    var signalList=signalListMake();


    //添加entity中port部分
    function entityPort(string){
        var flagIn=0;
        var flagOut=0;
        for(var i=0;i<List.componentDataArray.length;i++){
            if (List.componentDataArray[i].category=="input"){
                if(flagIn==0){
                    List.componentDataArray[i].name="input_"+(flagIn+1);
                    string=string+"    PORT(\n        "+List.componentDataArray[i].name;
                }
                else{
                    List.componentDataArray[i].name="input_"+(flagIn+1);
                    string=string+","+List.componentDataArray[i].name;
                }
                flagIn++;
            }
        }
        if(flagIn!=0)
            string=string+":in STD_LOGIC";
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="output"){
                if(flagIn+flagOut==0){
                    List.componentDataArray[i].name="output_"+(flagOut+1);
                    string=string+"    PORT(\n        "+List.componentDataArray[i].name;
                }
                else if(flagOut==0){
                    List.componentDataArray[i].name="output_"+(flagOut+1);
                    string=string+";\n        "+List.componentDataArray[i].name;
                }
                else{
                    List.componentDataArray[i].name="output_"+(flagOut+1);
                    string=string+","+List.componentDataArray[i].name;
                }
                flagOut++;
            }
        }
        if(flagOut!=0)
            string=string+":out STD_LOGIC";
        if(flagIn+flagOut!=0)
            string=string+"\n    );\n";
        return string;
    }

    //添加component部分
    function archComp(string){
        var comp={};
        var len=0;
        for(var i=0;i<List.componentDataArray.length;i++){
            if((List.componentDataArray[i].category!="input")&&(List.componentDataArray[i].category!="output")&&(List.componentDataArray[i].category!="vcc")&&(List.componentDataArray[i].category!="gnd")){
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
            string=string+"    COMPONENT "+"C"+comp[i]+"\n        PORT(\n";
            for(var j=0;j<chipInfos.length;j++){
                if(chipInfos[j].id==comp[i]){
                    string=string+"            "+chipInfos[j].pin.in +":in STD_LOGIC;\n            "+chipInfos[j].pin.out+":out STD_LOGIC";
                    if(chipInfos[j].pin.buffer.length!=0){
                        string=string+";\n            "+chipInfos[j].pin.buffer+":buffer STD_LOGIC";
                    }
                }
            }
            string=string+"\n        );\n    END COMPONENT;\n";
        }
        return string;
    }

    //添加需要的signal
    function archSignal(string){
        var num=0;
        for(var i=0;i<signalList.length;i++){
            if(signalList[i].signalname>num){
                num=signalList[i].signalname;
            }
        }
        
        for(i=0;i<=num;i++){
            if(i==0){
                string=string+"    SIGNAL ";
                string=string+"signal_empty";
            }
            else{
                string=string+",";
                string=string+"signal_"+i;
            }
        }
        string=string+":STD_LOGIC;\n"
        return string;
    }
    /*{
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
    }*/
    //添加实体语句，包括component应用和连线翻译成语句
    function archBegin(string){
        var num=1;
        //加component
        for(var i=0;i<List.componentDataArray.length;i++){
            if((List.componentDataArray[i].category!="input")&&(List.componentDataArray[i].category!="output")&&(List.componentDataArray[i].category!="vcc")&&(List.componentDataArray[i].category!="gnd")){
                string=string+"    u"+num+":C"+List.componentDataArray[i].category+" PORT MAP(";
                //+List.componentDataArray[i].name+"_in1,"+List.componentDataArray[i].name+"_in2,"+List.componentDataArray[i].name+"_out1"
                for(var j in List.componentDataArray[i].pin){
                    if(j!="port1")
                        string=string+",";
                    string=string+"\n        "
                    string=string+j+"=>";
                    if(List.componentDataArray[i].pin[j].length!=0){
                        for(var k=0;k<signalList.length;k++){
                            if(List.componentDataArray[i].pin[j][0]==signalList[k].name){
                                string=string+"signal_"+signalList[k].signalname;
                            }
                        }
                        //List.componentDataArray[i].pin[j][0];
                    }
                    else{
                        for(var k=0;k<chipInfos.length;k++){
                            if(chipInfos[k].id==List.componentDataArray[i].category){
                                var isIn=false;
                                for(var p=0;p<chipInfos[k].pin.in.length;p++){
                                    if(chipInfos[k].pin.in[p]==j){
                                        string=string+"signal_empty";
                                        isIn=true;
                                        break;
                                    }
                                }
                                if(isIn==false){
                                    string=string+"OPEN";
                                }
                            }
                        }
                    }
                }
                string=string+"\n    );\n";
                num++;
            }
        }
        //vcc
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="vcc"){
                string=string+"    ";
                if(List.componentDataArray[i].pin.port1.length!=0){
                        for(var k=0;k<signalList.length;k++){
                            if(List.componentDataArray[i].pin.port1[0]==signalList[k].name){
                                string=string+"signal_"+signalList[k].signalname+" <= '1';";
                            }
                        }
                        //List.componentDataArray[i].pin[j][0];
                    }
                string=string+"\n";
            }
        }
        //gnd
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="gnd"){
                string=string+"    ";
                if(List.componentDataArray[i].pin.port1.length!=0){
                        for(var k=0;k<signalList.length;k++){
                            if(List.componentDataArray[i].pin.port1[0]==signalList[k].name){
                                string=string+"signal_"+signalList[k].signalname+" <= '0';";
                            }
                        }
                        //List.componentDataArray[i].pin[j][0];
                    }
                string=string+"\n";
            }
        }
        //input
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="input"){
                string=string+"    ";
                if(List.componentDataArray[i].pin.port1.length!=0){
                        for(var k=0;k<signalList.length;k++){
                            if(List.componentDataArray[i].pin.port1[0]==signalList[k].name){
                                string=string+"signal_"+signalList[k].signalname+" <= "+List.componentDataArray[i].name+";";
                            }
                        }
                        //List.componentDataArray[i].pin[j][0];
                    }
                string=string+"\n";
            }
        }
        //output
        for(var i=0;i<List.componentDataArray.length;i++){
            if(List.componentDataArray[i].category=="output"){
                string=string+"    ";
                if(List.componentDataArray[i].pin.port1.length!=0){
                        for(var k=0;k<signalList.length;k++){
                            if(List.componentDataArray[i].pin.port1[0]==signalList[k].name){
                                string=string+List.componentDataArray[i].name+" <= "+"signal_"+signalList[k].signalname+";";
                            }
                        }
                        //List.componentDataArray[i].pin[j][0];
                    }
                string=string+"\n";
            }
        }
        
        return string;
    }
/*
    function cloneObject(src) {
        var dest = {};
        for(var key in src) {
            if(typeof src === "object"){
                dest[key] = cloneObject(src[key]);
            }
            else dest[key] = src[key];
        }
        return dest;
    }*/
    function signalListMake(){
        var num=0;
        for(var i=0;i<List.linkDataArray.length;i++){
            if(i==0){
                num++;
                List.linkDataArray[i].signalname=num;
            }
            else{
                for(var j=0;j<i;j++){
                    if(((List.linkDataArray[j].from==List.linkDataArray[i].from)&&(List.linkDataArray[j].fromPort==List.linkDataArray[i].fromPort))||((List.linkDataArray[j].from==List.linkDataArray[i].to)&&(List.linkDataArray[j].fromPort==List.linkDataArray[i].toPort))||((List.linkDataArray[j].to==List.linkDataArray[i].from)&&(List.linkDataArray[j].toPort==List.linkDataArray[i].fromPort))||((List.linkDataArray[j].to==List.linkDataArray[i].to)&&(List.linkDataArray[j].toPort==List.linkDataArray[i].toPort))){
                        List.linkDataArray[i].signalname=List.linkDataArray[j].signalname;
                        break;
                    }
                }
                if(List.linkDataArray[i].signalname==undefined){
                    num++;
                    List.linkDataArray[i].signalname=num;
                }  
            }
        }
        return signalList=List.linkDataArray;
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
        return s;
    }

//-----------------------------------------------------------------------------
// 说明：
// "draw2d_circuit_switch_HighLow" 是开关，只有一个输出端口 Port，用来代表输入信号
// "draw2d_circuit_display_Led" 是Led灯，只有一个端口 Port，代表输出信号
/*
var List = {
    "components": [
        // vcc, enable signal for chips
        {
            "type": "entity.VCC",
            "id": "vcc", // 67677-y78f-gy7f-ghm7-ghku88h7f6s4
            "ports": []
        },

        // gnd, ground signal for chips
        {
            "type": "entity.GND",
            "id": "gnd", // 8huk6-uyf6-rtfh-gtfh-gtyfhg6tfhgt
            "ports": []
        },

        // input a0
        {
            "type": "draw2d_circuit_switch_HighLow",
            "id": "switcha0", // -haod-udow-8ddh-8e3edwid9o2h
            "ports": []
        },

        // input a1
        // {
        //  "type": "draw2d_circuit_switch_HighLow",
        //  "id": "switcha1", // -ashd-aasl-iafj-laci9wdi29de
        //  "ports": []
        // },

        // input b0
        {
            "type": "draw2d_circuit_switch_HighLow",
            "id": "switchb0", // -ash0-i3ed-9jwm-dd9uekdma23s
            "ports": []
        },

        // input b1
        // {
        //  "type": "draw2d_circuit_switch_HighLow",
        //  "id": "switchb1", // -89hb-aash-ash2-l8inlidi29de
        //  "ports": []
        // },

        // output d0
        {
            "type": "draw2d_circuit_display_Led",
            "id": "d0",
            "ports": []
        },

        // output c0(carry)
        {
            "type": "draw2d_circuit_display_Led",
            "id": "c0",
            "ports": []
        },

        // nand gates
        {
            "type": "chips.C74LS00",
            "id": "c74ls00", // h-03de-3291-aea8-1d67a355a3b5
            "userData": {},
            "ports": [],
        },

        // not gates
        {
            "type": "chips.C74LS04",
            "id": "c74ls04", // b-5767-8155-c804-14bda7759dc2
            "userData": {},
            "ports": [],
        },

        // xor gate
        {
            "type": "chips.C74LS86",
            "id": "c74ls86", // a-a834-0221-2009-abc2d6bd852a
            "userData": {},
            "ports": [],
        }
    ],
    "connections": [
        {
            "type": "draw2d.Connection",
            "id": "inputa0", // a-dh27-akdh-uee8-dy2e82en8adu
            "source": {
                "node": "switcha0",
                "port": "Port"
            },
            "target": {
                "node": "c74ls86",
                "port": "port02"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "inputb0",
            "source": {
                "node": "switchb0",
                "port": "Port"
            },
            "target": {
                "node": "c74ls86",
                "port": "port01"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "dinput1",
            "source": {
                "node": "switcha0",
                "port": "Port"
            },
            "target": {
                "node": "c74ls00",
                "port": "port01"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "dinput2",
            "source": {
                "node": "switchb0",
                "port": "Port"
            },
            "target": {
                "node": "c74ls00h",
                "port": "port02"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "outputd0",
            "source": {
                "node": "c74ls86",
                "port": "port03"
            },
            "target": {
                "node": "d0",
                "port": "Port"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "a0_nand_b0",
            "source": {
                "node": "c74ls00",
                "port": "port03"
            },
            "target": {
                "node": "c74ls04s",
                "port": "port01"
            }
        },
        {
            "type": "draw2d.Connection",
            "id": "outputc0",
            "source": {
                "node": "c74ls86",
                "port": "port03"
            },
            "target": {
                "node": "c0",
                "port": "Port"
            }
        }
    ]
};*/
