/**
 * Created by Chen Yazheng on 16/10/20
 */

//ToDo: add 74ls series chips to support 1 bit adder circuit

// declare the namespace for this prj7
var tot = {}; // Team of Taoli

/**
 * The GraphicalEditor is responsible for layout and dialog handling.
 * @extends draw2d.ui.parts.GraphicalEditor
 */

var defaultRouterClassName = "draw2d.layout.connection.ManhattanConnectionRouter";
var defaultRouter = new draw2d.layout.connection.ManhattanConnectionRouter();

tot.Application = Class.extend({
	NAME: "tot.Application",

	/**
	 * @constructor
	 *
	 * @param {String} canvasId the is of the DOM element to use as paint container
	 */
	init: function() {
        this.view    = new tot.View("canvas");
		this.toolbar = new tot.Toolbar("toolbar", this, this.view);
		this.palette = new tot.Palette("navigation", this);
	},

    /**
	 * Load the JSON data into the view/canvas
	 */
	load: function(jsonDocument){
	    this.view.clear();

	    // unmarshal the JSON document into the canvas
	    // (load)
	    var reader = new draw2d.io.json.Reader();
	    reader.unmarshal(this.view, jsonDocument);

	},

    setDefaultRouterClassName: function(defaultRouterClassName){
	    defaultRouterClassName=  defaultRouterClassName;
        defaultRouter = eval("new "+defaultRouterClassName+"()");
	},

	createConnection: function(){

	    var conn = new draw2d.Connection();
	    conn.setRouter(defaultRouter);
	    conn.setOutlineStroke(1);
	    conn.setOutlineColor("#303030");
	    conn.setStroke(3);
	    conn.setRadius(5);
	    conn.setColor('#00A8F0');
	    return conn;
	}

});
