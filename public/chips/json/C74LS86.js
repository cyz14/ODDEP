
// Generated Code for the Draw2D touch HTML5 lib
//
// http://www.draw2d.org
//
// Go to the Designer http://www.draw2d.org
// to design your own shape or download user generated
//
var C74LS86 = draw2d.SetFigure.extend({

   NAME: "C74LS86",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:184,height:70},attr), setter, getter);

     this.attr({resizeable:false});

     var port;
     // 14
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(15.217391304347824, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("14");
     port.setMaxFanOut(20);
     // 13
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(27.717391304347824, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("13");
     port.setMaxFanOut(20);
     // 12
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(40.21739130434782, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("12");
     port.setMaxFanOut(20);
     // 11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(52.71739130434782, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("11");
     port.setMaxFanOut(20);
     // 10
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(65.21739130434783, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("10");
     port.setMaxFanOut(20);
     // 9
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(77.71739130434783, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("9");
     port.setMaxFanOut(20);
     // 8
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(89.67391304347825, 1.4285714285714286));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("8");
     port.setMaxFanOut(20);
     // 1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(15.217391304347824, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("1");
     port.setMaxFanOut(20);
     // 2
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(27.717391304347824, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("2");
     port.setMaxFanOut(20);
     // 3
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(40.21739130434782, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("3");
     port.setMaxFanOut(20);
     // 4
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(52.71739130434782, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("4");
     port.setMaxFanOut(20);
     // 5
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(65.21739130434783, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("5");
     port.setMaxFanOut(20);
     // 6
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(77.71739130434783, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("6");
     port.setMaxFanOut(20);
     // 7
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(89.67391304347825, 98.57142857142857));
     port.setConnectionDirection();
     port.setBackgroundColor("#37B1DE");
     port.setName("7");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 184;
      this.originalHeight= 70;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L184,0 L184,70 L0,70");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");

        // Rectangle
        shape = this.canvas.paper.path('M184 70L0 70L0 0L184 0Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");

        // Chip Label
        shape = this.canvas.paper.text(0,0,'74LS86');
        shape.attr({"x":65,"y":37,"text-anchor":"start","text":"74LS86","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
