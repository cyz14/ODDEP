/**
 * Created by Chen Yazheng on 16/10/20
 */

tot.View = draw2d.Canvas.extend({

	/**
	 * @constructor
	 */
	init: function(id) {
	    var _this = this;
		this._super(id);
        this.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
            createConnection: this.createConnection
          }));

        this.setScrollArea("#canvasWrapper");
        
        // nice grid decoration for the canvas paint area
        //
        this.grid =  new draw2d.policy.canvas.ShowGridEditPolicy(20);
        this.installEditPolicy( this.grid);

        // add some SnapTo policy for better shape/figure alignment
        //
        this.installEditPolicy( new draw2d.policy.canvas.SnapToGeometryEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToCenterEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToInBetweenEditPolicy());
	},

	/**
     * @method
     * Called if the DragDrop object is moving around.<br>
     * <br>
     * Graphiti use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dragged DOM element.
     * @param {Number} x the x coordinate of the drag
     * @param {Number} y the y coordinate of the drag
     * 
     * @template
     **/
    onDrag:function(droppedDomNode, x, y )
    {
    },
    
    /**
     * @method
     * Called if the user drop the droppedDomNode onto the canvas.<br>
     * <br>
     * Draw2D use the jQuery draggable/droppable lib. Please inspect
     * http://jqueryui.com/demos/droppable/ for further information.
     * 
     * @param {HTMLElement} droppedDomNode The dropped DOM element.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
    onDrop : function(droppedDomNode, x, y, shiftKey, ctrlKey)
    {
        var type = $(droppedDomNode).data("shape");
        var figure = eval("new "+type+"();");
        // create a command for the undo/redo support
        var command = new draw2d.command.CommandAdd(this, figure, x, y);
        this.getCommandStack().execute(command);
    },

        /**
     * @method
     * Transforms a document coordinate to canvas coordinate.
     *
     * @param {Number} x the x coordinate relative to the window
     * @param {Number} y the y coordinate relative to the window
     *
     * @returns {draw2d.geo.Point} The coordinate in relation to the canvas [0,0] position
     */
    fromDocumentToCanvasCoordinate: function(x, y)
    {
        return new draw2d.geo.Point(
            (x - this.getAbsoluteX())*this.zoomFactor,
            (y - this.getAbsoluteY())*this.zoomFactor);
    },

    /**
     * @method
     * Transforms a canvas coordinate to document coordinate.
     *
     * @param {Number} x the x coordinate in the canvas
     * @param {Number} y the y coordinate in the canvas
     *
     * @returns {draw2d.geo.Point} the coordinate in relation to the document [0,0] position
     */
    fromCanvasToDocumentCoordinate: function(x,y)
    {
        return new draw2d.geo.Point(
            ((x*(1/this.zoomFactor)) + this.getAbsoluteX()),
            ((y*(1/this.zoomFactor)) + this.getAbsoluteY()));
    }

});