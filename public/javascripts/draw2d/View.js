/**
 * Created by Chen Yazheng on 16/10/20
 */

tot.View = draw2d.Canvas.extend({

	/**
	 * @constructor
	 */
	init: function(app, id) {
		this._super(id);
		this.setScrollArea("#"+id);
        this.installEditPolicy(
            new draw2d.policy.connection.DragConnectionCreatePolicy({
                createConnection: function(){ return new HoverConnection(); }
            })
        );

        var router = new ConnectionRouter();
        router.abortRoutingOnFirstVertexNode=false;
        var createConnection=function(sourcePort, targetPort){
            var c = new Connection({
                color:"#000000",
                router: router,
                stroke:1.5,
                radius:2
            });
            if(sourcePort) {
                c.setSource(sourcePort);
                c.setTarget(targetPort);
            }
            return c;
        };

        this.installEditPolicy( new DropInterceptorPolicy());

        // install a Connection create policy which matches to a "circuit like"
        // connections
        this.connectionPolicy = new draw2d.policy.connection.ComposedConnectionCreatePolicy(
                [
                    // create a connection via Drag&Drop of ports
                    new draw2d.policy.connection.DragConnectionCreatePolicy({
                        createConnection:createConnection
                    }),
                    // or via click and point
                    new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
                        createConnection:createConnection
                    })
                ]);
        this.installEditPolicy(this.connectionPolicy);

        // show the ports of the elements only if the mouse cursor is close to the shape.
        this.coronaFeedback = new draw2d.policy.canvas.CoronaDecorationPolicy({diameterToBeVisible:50});
        this.installEditPolicy(this.coronaFeedback);

        // nice grid decoration for the canvas paint area
        this.grid =  new draw2d.policy.canvas.ShowGridEditPolicy(20);
        this.installEditPolicy( this.grid);

        // add some SnapTo policy for better shape/figure alignment
        this.installEditPolicy( new draw2d.policy.canvas.SnapToGeometryEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToCenterEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToInBetweenEditPolicy());

        this.installEditPolicy(new EditEditPolicy());
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
    }
});