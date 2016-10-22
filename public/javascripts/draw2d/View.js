/**
 * Created by Chen Yazheng on 16/10/20
 */

tot.View = draw2d.Canvas.extend({

	/**
	 * @constructor
	 */
	init: function(id) {
	    var _this = this;
		this._super(id, 2000, 2000);
        this.installEditPolicy(  new draw2d.policy.connection.DragConnectionCreatePolicy({
            createConnection: this.createConnection
          }));
        this.setScrollArea("#canvas");
		this.currentDropConnection = null;
	},

	onDrag: function (droppedDomNode, x, y) {

	},

	onDrop: function (droppedDomNode, x, y, shiftKey, ctrlKey) {
		var type = $(droppedDomNode).data("shape");
		var figure = eval("new "+type+"();");
		// create a command for the undo/redo support
		var command = new draw2d.command.CommandAdd(this, figure, x, y);
		this.getCommandStack().execute(command);
	}
});