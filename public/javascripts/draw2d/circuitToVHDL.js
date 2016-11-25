// Created by Chen Yazheng on 2016/11/02

var chipInfos = [{
        "id": "74LS00",
        "type": "C74LS00",
        "description": "四-二输入与非门",
        "pin": { "in": ["port1", "port2", "port4", "port5", "port7", "port9", "port10", "port12", "port13", "port14"], "out": ["port3", "port6", "port8", "port11"], "buffer": [] }
    },
    {
        "id": "74LS04",
        "type": "C74LS04",
        "description": "六反相器",
        "pin": { "in": ["port1", "port3", "port5", "port7", "port9", "port11", "port13", "port14"], "out": ["port2", "port4", "port6", "port8", "port10", "port12"], "buffer": [] }
    },
    {
        "id": "74LS11",
        "type": "C74LS11",
        "description": "三输入与门",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port7", "port9", "port10", "port11", "port13", "port14"], "out": ["port6", "port8", "port12"], "buffer": [] }
    },
    {
        "id": "74LS14",
        "type": "C74LS14",
        "description": "六反相器（施密特触发）",
        "pin": { "in": ["port1", "port3", "port5", "port7", "port9", "port11", "port13", "port14"], "out": ["port2", "port4", "port6", "port8", "port10", "port12"], "buffer": [] }
    },
    {
        "id": "74LS20",
        "type": "C74LS20",
        "description": "二-四输入与非门",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port7", "port9", "port10", "port11", "port12", "port13", "port14"], "out": ["port6", "port8"], "buffer": [] }
    },
    {
        "id": "74LS27",
        "type": "C74LS27",
        "description": "三-三输入与非门",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port7", "port9", "port10", "port11", "port13", "port14"], "out": ["port6", "port8", "port12"], "buffer": [] }
    },
    {
        "id": "74LS86",
        "type": "C74LS86",
        "description": "四-二输入异或门",
        "pin": { "in": ["port1", "port2", "port4", "port5", "port7", "port9", "port10", "port12", "port13", "port14"], "out": ["port3", "port6", "port8", "port11"], "buffer": [] }
    },
    {
        "id": "74LS74",
        "type": "C74LS74",
        "description": "双D触发器（正沿触发）",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port7", "port10", "port11", "port12", "port13", "port14"], "out": ["port5", "port6", "port8", "port9"], "buffer": [] }
    },
    {
        "id": "74LS75",
        "type": "C74LS75",
        "description": "四位双稳态锁存器",
        "pin": { "in": ["port2", "port3", "port4", "port5", "port6", "port7", "port12", "port13"], "out": ["port1", "port8", "port9", "port10", "port11", "port14", "port15", "port16"], "buffer": [] }
    },
    {
        "id": "74LS85",
        "type": "C74LS85",
        "description": "4位数值比较器",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port8", "port9", "port10", "port11", "port12", "port13", "port14", "port15", "port16"], "out": ["port5", "port6", "port7"], "buffer": [] }
    },
    {
        "id": "74LS90",
        "type": "C74LS90",
        "description": "二-五-十进制计数器",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port6", "port7", "port10", "port13", "port14"], "out": ["port12"], "buffer": ["port8", "port9", "port11"] }
    },
    {
        "id": "74LS125",
        "type": "C74LS125",
        "description": "三态输出四总线缓冲器",
        "pin": { "in": ["port1", "port2", "port4", "port5", "port7", "port9", "port10", "port12", "port13", "port14"], "out": ["port3", "port6", "port8", "port11"], "buffer": [] }
    },
    {
        "id": "74LS161",
        "type": "C74LS161",
        "description": "4位二进制同步计数器",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port6", "port7", "port8", "port9", "port10", "port16"], "out": ["port15"], "buffer": ["port11", "port12", "port13", "port14"] }
    },
    {
        "id": "74LS253",
        "type": "C74LS253",
        "description": "双4选1数据选择器",
        "pin": { "in": ["port1", "port2", "port3", "port4", "port5", "port6", "port8", "port10", "port11", "port12", "port13", "port14", "port15", "port16"], "out": ["port7", "port9"], "buffer": [] }
    }
];

var Port = {
    createNew: function(name, type) {
        var port = {
            "name": name || "port",
            "type": type || "out", // "in", "out" 
        };
        port.setName = function(name) { port.name = name; }
        port.getName = function() { return port.name; }
        port.setType = function(type) {
            if (type == "inport" || type == "outport" || type == "hybrid")
                port.type = type;
        }
        port.getType = function() { return port.type; }
    }
};

var VHDLCode = {
    circuitJSON: {},

    setCircuitJSON = function(circuitJSON) {
        this.circuitJSON = circuitJSON;
    },

    createNew: function() {
        var code = {
            "libraries": [],
            "entity": {
                "name": "main",
                "ports": []
            },
            "architecture": {
                "components": [],
                "signals": [],
                "constants": [],
                "behaviour": {
                    "name": "bhv"
                }
            },
            "indent": "",
            "indentStr": "    "
        };

        code.addLibrary({
            "name": "IEEE",
            "use": ["IEEE.STD_LOGIC_1164.ALL"]
        });
        code.addPort(Port.createNew("a", "in"));
        code.addPort(Port.createNew("b", "in"));
        code.addPort(Port.createNew("s", "out"));
        code.addPort(Port.createNew("c", "out"));

        code.addLibrary = function(library) { code.libraries.push(library); }
        code.setName = function(name) { code.entity.name = name; }
        code.addPort = function(port) {
            if (type == "inport" || type == "outport" || type == "hybrid")
                code.entity.ports.push(port);
        }
        code.clearPorts = function() { code.entity.ports = []; }

        code.marshal = function() {
            var vhdl = "";
            vhdl += code.marshalLibrary();
            vhdl += code.marshalEntity();
            code.marshalArchitecture();
            return code;
        }

        code.marshalLibrary = function() {
            var result = "";
            for (var library in code.libraries) {
                if (true) { // library name valid
                    result += ["LIBRARY", library.name].join(" ") + ";\n";
                    for (var use in library.uses) {
                        result += ["USE", use].join(" ") + ";\n";
                    }
                }
            }
            return result;
        }

        code.marshalEntity = function() {
            var result = "";
            result += ["ENTITY", code.entity.name, "IS"].join(" ") + "\n";
            code.incIndent();
            result += code.indentStr + "PORT(" + "\n";
            code.incIndent();
            var first = true;
            for (var port in code.entity.ports) {
                if (first) first = false;
                else {
                    result += ";\n"
                }
                result += code.indentStr + [port.name, ":", port.type, "STD_LOGIC"].join(" ");
            }
            result += "\n\n";
            code.decIndent();
            result += code.indentStr + ");"
            code.decIndent();
            return result;
        }

        code.marshalArchitecture = function() {
            var result = "";
            result +=
                code.indentStr + ["ARCHITECTURE", code.architecture.behaviour.name, "OF",
                    code.entity.name, "IS"
                ].join(" ") + "\n";
            result += code.marshalArchitectureComponents();
            result += code.marshalArchitectureConstants();
            result += code.marshalArchitectureSignals();
            result += code.marshalArchitectureBehaviour();
            return result;
        }

        code.marshalArchitectureComponents = function() {
            var result = "\n";
            code.incIndent();
            for (var component in code.architecture.components) {
                result += component.info + "\n"; // info need to be prepared for every component
            }
            code.decIndent();
            return result;
        }

        code.marshalArchitectureSignals = function() {
            var result = "\n";
            return result;
        }

        code.marshalArchitectureConstants = function() {
            var result = "\n";
            return result;
        }

        code.marshalArchitectureBehaviour = function() {
            var result = "";
            result += code.indentStr + "BEGIN" + "\n";

            result += code.indentStr + ["END", code.architecture.behaviour.name].join(" ") + ";\n";
            return result;
        }

        code.incIndent = function() {
            code.indent = code.indent + code.indentStr;
        }
        code.decIndent = function() {
            if (code.indent.length - indentStr.length < 0) code.indentStr = "";
            else
                code.indent = code.indent.substr(0, code.indent.length - indentStr.length);
        }
        code.setIndentStr = function(indentStr) {
            code.indentStr = indentStr;
            code.indent = "";
        }
        return code;
    }
};