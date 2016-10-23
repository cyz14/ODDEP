/**
 * Created by Chen Yazheng on 16/10/20
 */
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

        var layout = {
			west: {
				resizable:true,
				closable:true,
				resizeWhileDragging:true,
				paneSelector: "#navigation"
			},
			center: {
				resizable:true,
				closable:true,
				resizeWhileDragging:true,
				paneSelector: "#content"
			}
		};
		var contentLayout =  {
			north: {
				resizable:false,
				closable:false,
				spacing_open:0,
				spacing_closed:0,
				size:50,
				paneSelector: "#toolbar"
			},
			center: {
				resizable:false,
				closable:false,
				spacing_open:0,
				spacing_closed:0,
				paneSelector: "#canvas"
			}
		};

		if (showJSON === true) {
			contentLayout.east = {
				size:250,
				resizable: true,
				closable: false,
				paneSelector: "#json"
			};
		}
		this.contentLayout = $('#content').layout(contentLayout);
		// layout FIRST the body
		this.appLayout = $('#container').layout(layout);
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