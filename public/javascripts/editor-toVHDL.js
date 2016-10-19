
    /*       以下为转VHDL的测试输入       */
    var chipInfos = [
        { "id": "74LS00",   "description": "四-二输入与非门",       
        "pin":["in","in","out","in","in","out","gnd","out","in","in","out","in","in","vcc"]   
        },
        { "id": "74LS04",   "description": "六反相器",             
        "pin":["in","out","in","out","in","out","gnd","out","in","out","in","out","in","vcc"] 
        },
        { "id": "74LS11",   "description": "三输入与门",            
        "pin":["in","in","in","in","in","out","gnd","out","in","in","in","out","in","vcc"]   
        },
        { "id": "74LS14",   "description": "六反相器（施密特触发）", 
        "pin":["in","out","in","out","in","out","gnd","out","in","out","in","out","in","vcc"] 
        },
        { "id": "74LS20",   "description": "二-四输入与非门",       
        "pin":["in","in","in","in","in","out","gnd","out","in","in","in","in","in","vcc"] 
        },
        { "id": "74LS27",   "description": "三-三输入与非门",       
        "pin":["in","in","in","in","in","out","gnd","out","in","in","in","in","in","vcc"] 
        },
        { "id": "74LS86",   "description": "四-二输入异或门",       
        "pin":["in","in","out","in","in","out","gnd","out","in","in","out","in","in","vcc"] 
        },
        { "id": "74LS74",   "description": "双D触发器（正沿触发）",  
        "pin":["in","in","in","in","out","out","gnd","out","out","in","in","in","in","vcc"] 
        },
        { "id": "74LS75",   "description": "四位双稳态锁存器",       
        "pin":["out","in","in","in","vcc","in","in","out","out","out","out","gnd","in","out","out","out"] 
        },
        { "id": "74LS85",   "description": "4位数值比较器",         
        "pin":["in","in","in","in","out","out","out","gnd","in","in","in","in","in","in","in","vcc"] 
        },
        { "id": "74LS90",   "description": "二-五-十进制计数器",     
        "pin":["in","in","in","in","vcc","in","in","buffer","buffer","gnd","buffer","out","in","in"] 
        },
        { "id": "74LS125",  "description": "三态输出四总线缓冲器",   
        "pin":["in","in","out","in","in","out","gnd","out","in","in","out","in","in","vcc"] 
        },
        { "id": "74LS161",  "description": "4位二进制同步计数器",    
        "pin":["in","in","in","in","in","in","in","gnd","in","in","out","out","out","out","in","vcc"] 
        },
        { "id": "74LS253",  "description": "双4选1数据选择器",      
        "pin":["in","in","in","in","in","in","out","gnd","out","in","in","in","in","in","in","vcc"] 
        }
    ];
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
        return s;
    }

