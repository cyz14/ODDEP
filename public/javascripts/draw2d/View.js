/**
 * Created by Chen Yazheng on 16/10/20
 */
var scrollAreaId = "#canvas";
var defaultRouter = new ConnectionRouter();//new draw2d.layout.connection.InteractiveManhattanConnectionRouter();

tot.View = draw2d.Canvas.extend({
    
	// createConnection: function(){

	//     var conn = new draw2d.Connection();
	//     conn.setRouter(defaultRouter);
	//     conn.setOutlineStroke(1);
	//     conn.setOutlineColor("#303030");
	//     conn.setStroke(3);
	//     conn.setRadius(5);
	//     conn.setColor('#00A8F0');
	//     return conn;
	// },
	/**
	 * @constructor
	 */
	init: function(id) {
	    var _this = this;
		this._super(id);

        this.setScrollArea(scrollAreaId);

        // add commandStack support
        this.getCommandStack().addEventListener(this);

        // this.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
        //     createConnection: this.createConnection
        //   }));

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
        //
        this.connectionPolicy = new draw2d.policy.connection.ComposedConnectionCreatePolicy(
                [
                    // create a connection via Drag&Drop of ports
                    //
                    new draw2d.policy.connection.DragConnectionCreatePolicy({
                        createConnection:createConnection
                    }),
                    // or via click and point
                    //
                    new draw2d.policy.connection.OrthogonalConnectionCreatePolicy({
                        createConnection:createConnection
                    })
                ]);
        this.installEditPolicy(this.connectionPolicy);

        // nice grid decoration for the canvas paint area
        //
        this.grid =  new draw2d.policy.canvas.ShowGridEditPolicy(20);
        this.installEditPolicy( this.grid);

        // add some SnapTo policy for better shape/figure alignment
        //
        this.installEditPolicy( new draw2d.policy.canvas.SnapToGeometryEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToCenterEditPolicy());
        this.installEditPolicy( new draw2d.policy.canvas.SnapToInBetweenEditPolicy());

        // Enable Copy&Past for figures
        //
        Mousetrap.bind(['ctrl+c', 'command+c'], $.proxy(function (event) {
            var primarySelection = this.getSelection().getPrimary();
            if(primarySelection!==null){
                this.clippboardFigure = primarySelection.clone({excludePorts:true});
                this.clippboardFigure.translate(5,5);
            }
            return false;
        },this));
        Mousetrap.bind(['ctrl+v', 'command+v'], $.proxy(function (event) {
            if(this.clippboardFigure!==null){
                var cloneToAdd = this.clippboardFigure.clone({excludePorts:true});
                var command = new draw2d.command.CommandAdd(this, cloneToAdd, cloneToAdd.getPosition());
                this.getCommandStack().execute(command);
                this.setCurrentSelection(cloneToAdd);
            }
            return false;
        },this));


        Mousetrap.bind(['left'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
            _this.getSelection().each(function(i,f){f.translate(-diff,0);});
            return false;
        });
        Mousetrap.bind(['up'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
            _this.getSelection().each(function(i,f){f.translate(0,-diff);});
            return false;
        });
        Mousetrap.bind(['right'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
            _this.getSelection().each(function(i,f){f.translate(diff,0);});
            return false;
        });
        Mousetrap.bind(['down'],function (event) {
            var diff = _this.getZoom()<0.5?0.5:1;
            _this.getSelection().each(function(i,f){f.translate(0,diff);});
            return false;
        });

        // button_zoom functions
        var setZoom = function(newZoom){
            var bb = _this.getBoundingBox().getCenter();
            var c = $(scrollAreaId);
            _this.setZoom(newZoom);
            _this.scrollTo((bb.y/newZoom- c.height()/2), (bb.x/newZoom- c.width()/2));
        };

        //  ZoomIn Button and the callbacks
        //
        $("#canvas_zoom_in").on("click",function(){
            setZoom(_this.getZoom()*1.2);
        });

        // OneToOne Button
        //
        $("#canvas_zoom_normal").on("click",function(){
            setZoom(1.0);
        });

        //ZoomOut Button and the callback
        //
        $("#canvas_zoom_out").on("click",function(){
            setZoom(_this.getZoom()*0.8);
        });

        $(".toolbar").delegate("#editDelete:not(.disabled)","click", function(){
            var selection = _this.getSelection();
            _this.getCommandStack().startTransaction(draw2d.Configuration.i18n.command.deleteShape);
            selection.each(function(index, figure){

                // Don't delete the conection if the source or target node part of the
                // selection. In this case the nodes deletes all connections by itself.
                //
                if(figure instanceof draw2d.Connection){
                    if(selection.contains(figure.getSource().getRoot()) || selection.contains(figure.getTarget().getRoot())){
                       return;
                    }
                }

                var cmd = figure.createCommand(new draw2d.command.CommandType(draw2d.command.CommandType.DELETE));
                if(cmd!==null){
                    _this.getCommandStack().execute(cmd);
                }
            });
            // execute all single commands at once.
            _this.getCommandStack().commitTransaction();
        });

        // Register a Selection listener for the state hnadling
        // of the Delete Button
        //
        this.on("select", function(emitter, event){
            if(event.figure===null ) {
                $("#editDelete").addClass("disabled");
            }
            else{
                $("#editDelete").removeClass("disabled");
            }
        });

        $(".toolbar").delegate("#editUndo:not(.disabled)","click", function(){
            _this.getCommandStack().undo();
        });

        $(".toolbar").delegate("#editRedo:not(.disabled)","click", function(){
            _this.getCommandStack().redo();
        });
	}, // end init

    getBoundingBox: function()
    {
        var xCoords = [];
        var yCoords = [];
        this.getFigures().each(function(i,f){
           var b = f.getBoundingBox();
            xCoords.push(b.x, b.x+b.w);
            yCoords.push(b.y, b.y+b.h);
        });
        var minX   = Math.min.apply(Math, xCoords);
        var minY   = Math.min.apply(Math, yCoords);
        var width  = Math.max(100,Math.max.apply(Math, xCoords)-minX);
        var height = Math.max(100,Math.max.apply(Math, yCoords)-minY);

        return new draw2d.geo.Rectangle(minX,minY,width,height);
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
     * Disable snapTo GRID if we have select more than one element
     * @param figure
     * @param pos
     */
    snapToHelper : function(figure, pos)
    {
        if(this.getSelection().getSize()>1){
            return pos;
        }
        return this._super(figure, pos);
    },

    /**
     * @method
     * Transforms a document coordinate to canvas coordinate.
     *
     * @param {Number} x the x coordinate relative to the window
     * @param {Number} y the y coordinate relative to the window
     *
     * @returns {draw2d.geo.Point} The coordinate in relation to the canvas [0,0] position
     * 
     * !! 修改，部件有滑动，x加上垂直滑动
     */
    fromDocumentToCanvasCoordinate: function(x, y)
    {
        return new draw2d.geo.Point(
            (x - this.getAbsoluteX())*this.zoomFactor,
            (y - this.getAbsoluteY() + $('body').scrollTop())*this.zoomFactor);
    },

    /**
     * @method
     * Transforms a canvas coordinate to document coordinate.
     *
     * @param {Number} x the x coordinate in the canvas
     * @param {Number} y the y coordinate in the canvas
     *
     * @returns {draw2d.geo.Point} the coordinate in relation to the document [0,0] position
     * 
     * !! 修改，部件有滑动
     */
    fromCanvasToDocumentCoordinate: function(x,y)
    {
        return new draw2d.geo.Point(
            ((x*(1/this.zoomFactor)) + this.getAbsoluteX()),
            ((y*(1/this.zoomFactor)) + this.getAbsoluteY() - $('body').scrollTop()));
    },

        /**
     * @method
     * Sent when an event occurs on the command stack. draw2d.command.CommandStackEvent.getDetail()
     * can be used to identify the type of event which has occurred.
     *
     * @template
     *
     * @param {draw2d.command.CommandStackEvent} event
     **/
    stackChanged:function(event)
    {
        $("#editUndo").addClass("disabled");
        $("#editRedo").addClass("disabled");

        if(event.getStack().canUndo()) {
            $("#editUndo").removeClass("disabled");
        }

        if(event.getStack().canRedo()) {
            $("#editRedo").removeClass("disabled");
        }   
    }

});
