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
		var _this = this;
		this.localStorage = [];

		try {
            if( 'localStorage' in window && window.localStorage !== null){
                this.localStorage = localStorage;
            }
        } catch(e) {

        }

        this.palette = new tot.Palette();
        this.view    = new tot.View(this, "canvas");
		this.toolbar = new tot.Toolbar("toolbar", this, this.view);

		/*
         * Replace all SVG images with inline SVG
         */
        // Now Chen Yazheng doesn't know what this mean
        $('img.svg').each(function(){
            var $img = $(this);
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');

        });
	}
});