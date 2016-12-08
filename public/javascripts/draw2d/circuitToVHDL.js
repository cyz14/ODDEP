// Created by Chen Yazheng on 2016/11/02

var Port = {
    createNew: function(name, type) {
        var port = {
            "name": name || "port",
            "type": type || "out", // "in", "out" 
        };
        port.setName = function(name) { port.name = name; }
        port.getName = function() { return port.name; }
        port.setType = function(type) {
            if (type == "in" || type == "out")
                port.type = type;
            else if (type == "hybrid") {
                port.type = "inout";
            }
        }
        port.getType = function() { return port.type; }
        return port;
    }
};

var VHDLCode = {

    createNew: function(circuit) {

        var code = {
            "libraries": [],
            "entity": {
                "name": "main",
                "ports": [],
                "inports": [],
                "outports": []
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
            "indentStr": "    ",
            "circuit": circuit
        };
        code.writer = IndentWriter.createNew();
        code.setCircuit = function(circuit) { code.circuit = circuit; }
        code.addLibrary = function(library) { code.libraries.push(library); }
        code.setName = function(name) { code.entity.name = name; }
        code.addPort = function(port) {
            if (port.type == "in") {
                code.entity.inports.push(port);
                code.entity.ports.push(port);
            } else if (port.type == "out") {
                code.entity.outports.push(port);
                code.entity.ports.push(port);
            } else if (port.type == "hybrid") {
                code.entity.ports.push(port);
            }
        }
        code.clearPorts = function() {
            code.entity.ports 
            = code.entity.inports 
            = code.entity.outports 
            = [];
        }

        code.marshal = function() {
            var vhdl = "";
            vhdl += code.marshalLibrary();
            vhdl += "\n\n";
            vhdl += code.marshalEntity();
            vhdl += "\n\n";
            vhdl += code.marshalArchitecture();
            return vhdl;
        }

        code.marshalLibrary = function() {
            var result = "";
            for (var i in code.libraries) {
                var library = code.libraries[i];
                if (library.name.length > 0) { // library name valid
                    result += ["LIBRARY", library.name].join(" ") + ";\n";
                    for (var iu in library.uses) {
                        var use = library.uses[iu];
                        result += ["USE", use].join(" ") + ";\n";
                    }
                }
            }
            return result;
        }

        code.marshalEntity = function() {yyyyyyyyy      
            code.prepareEntity();
            var iw = IndentWriter.createNew();
            iw.writeLine(["ENTITY", code.entity.name, "IS", "PORT("].join(" "));
            iw.incIndent();
            // var result = "";
            // result += ["ENTITY", code.entity.name, "IS", "PORT("].join(" ") + "\n";
            // code.incIndent();
            code.entity.ports.sort(sortByName);
            var end = code.entity.ports.length - 1;
            for (var i in code.entity.ports) {
                var port = code.entity.ports[i];
                var line = [port.name, ":", port.type, "STD_LOGIC"].join(" ");
                if (i == end) ;
                else {
                    line += ";";
                }
                iw.writeLine(line);
            }
            iw.decIndent();
            iw.writeLine(");")
            iw.writeLine("END ENTITY;");
            result = iw.getContent();
            iw.flush();
            return result;
        }

        /**
         * Find all inports and outports and add to entity
         */
        code.prepareEntity = function () {
            var inports_num = 0;
            var outports_num = 0;
            for (var i in code.circuit.components) {
                var comp = code.circuit.components[i];
                if (comp.type == "draw2d_circuit_switch_HighLow") {
                    code.addPort(Port.createNew(name= comp.name || "input_"+inports_num++
                    ,type = "in"));
                } else if (comp.type == "draw2d_circuit_switch_PushButton") {
                    code.addPort(Port.createNew(name= comp.name || "input_"+inports_num++
                    ,type = "in"));
                } else if (comp.type == "draw2d_circuit_display_Led") {
                    code.addPort(Port.createNew(name= comp.name || "output_"+outports_num++
                    ,type = "out"));
                }
            }
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
            var circuit = code.circuit;
            for (var ic in circuit.components) {
                var component = circuit.components[ic];
                if (code.getComponentInfo(component) != null)
                    result += code.getComponentInfo(component) + "\n"; // info need to be prepared for every component
            }
            code.decIndent();
            return result;
        }

        code.marshalArchitectureSignals = function() {
            var result = "";
            var iw = IndentWriter.createNew();
            var connections = code.circuit.connections; 
            for (var si in connections) {
                var conn = connections[si];
                var src = conn.source;
                var tgt = conn.targer;
            }
            return result;
        }

        code.marshalArchitectureConstants = function() {
            var result = "";
            result += ["HIGH", ":", "STD_LOGIC:=","1;"].join(" ") + "\n";
            result += ["LOW ", ":", "STD_LOGIC:=","0;"].join(" ") + "\n";
            return result;
        }

        code.marshalArchitectureBehaviour = function() {
            var result = "";
            result += code.indentStr + "BEGIN" + "\n";

            result += code.indentStr + ["END", code.architecture.behaviour.name].join(" ") + ";\n";
            return result;
        }
        code.getComponentInfo = function(comp) {
            return comp.componentInfo;
        }

        code.incIndent = function() {
            code.indent = code.indent + code.indentStr;
        }
        code.decIndent = function() {
            if (code.indent.length - code.indentStr.length < 0) code.indent = "";
            else
                code.indent = code.indent.substr(0, code.indent.length - code.indentStr.length);
        }
        code.setIndentStr = function(indentStr) {
            code.indentStr = indentStr;
            // code.indent = "";
        }

        code.addLibrary({
            "name": "IEEE",
            "uses": ["IEEE.STD_LOGIC_1164.ALL", "IEEE.STD_LOGIC_ARITH.ALL", "IEEE.STD_LOGIC_UNSIGNED.ALL"]
        });
        // code.addPort(Port.createNew("a", "in"));
        // code.addPort(Port.createNew("b", "in"));
        // code.addPort(Port.createNew("s", "out"));
        // code.addPort(Port.createNew("c", "out"));

        return code;
    }
};