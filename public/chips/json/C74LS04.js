// Generated Code for the Draw2D touch HTML5 lib
//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var C74LS04 = draw2d.SetFigure.extend({            

   NAME: "C74LS04",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:193,height:70},attr), setter, getter);
     var port;
     // port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(14.847797927461139, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port14");
     port.setMaxFanOut(10);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(28.238341968911914, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port13");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(40.41450777202072, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port12");
     port.setMaxFanOut(20);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(52.07253886010362, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port11");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(64.24870466321244, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port10");
     port.setMaxFanOut(20);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(76.68393782383419, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port9");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(88.08290155440413, 4.285714285714286));
     port.setConnectionDirection(0);
     port.setBackgroundColor("#37B1DE");
     port.setName("port8");
     port.setMaxFanOut(20);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(14.847797927461139, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port1");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(28.238341968911914, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port2");
     port.setMaxFanOut(20);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(40.41450777202072, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port3");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(52.11301813471502, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port4");
     port.setMaxFanOut(20);
     // port
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(64.24870466321244, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port5");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(77.2020725388601, 98.57142857142857));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port6");
     port.setMaxFanOut(20);
     // port
     port = this.createPort("hybrid", new draw2d.layout.locator.XYRelPortLocator(88.60103626943004, 97.14285714285714));
     port.setConnectionDirection(2);
     port.setBackgroundColor("#37B1DE");
     port.setName("port7");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 193;
      this.originalHeight= 70;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L193,0 L193,70 L0,70");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // Rectangle
        shape = this.canvas.paper.path('M0 50.42958950203865L0 70L193 70L193 0L0 0L0 19.570410497961348L1.4723222932107092 19.964918067425515L4 21.14359353944883L6.284601754984578 22.743288910096453L8.256711089903547 24.71539824501542L9.85640646055117 27L11.035081932574485 29.52767770678929L11.756924048195287 32.22162915732906L12 35L11.756924048195287 37.77837084267094L11.035081932574485 40.47232229321071L9.85640646055117 43L8.256711089903547 45.28460175498458L6.284601754984578 47.25671108990355L4 48.85640646055117L1.4723222932107092 50.035081932574485L0 50.42958950203865Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","Rectangle");
        
        // Label
        shape = this.canvas.paper.text(0,0,'74LS04');
        shape.attr({"x":70.0,"y":38.5,"text-anchor":"start","text":"74LS04","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'Vcc');
        shape.attr({"x":22.328125,"y":19,"text-anchor":"start","text":"Vcc","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'6A');
        shape.attr({"x":48.65625,"y":20,"text-anchor":"start","text":"6A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'GND');
        shape.attr({"x":158.671875,"y":56,"text-anchor":"start","text":"GND","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1A');
        shape.attr({"x":23.984375,"y":55.5,"text-anchor":"start","text":"1A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'6Y');
        shape.attr({"x":73.34375,"y":20,"text-anchor":"start","text":"6Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'5A');
        shape.attr({"x":96.234375,"y":20,"text-anchor":"start","text":"5A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'5Y');
        shape.attr({"x":118.65625,"y":20,"text-anchor":"start","text":"5Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'4A');
        shape.attr({"x":143,"y":20,"text-anchor":"start","text":"4A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'4Y');
        shape.attr({"x":166,"y":20,"text-anchor":"start","text":"4Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'1Y');
        shape.attr({"x":48.6640625,"y":55.5,"text-anchor":"start","text":"1Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'2A');
        shape.attr({"x":73.34375,"y":56,"text-anchor":"start","text":"2A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'2Y');
        shape.attr({"x":95.234375,"y":56,"text-anchor":"start","text":"2Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'3A');
        shape.attr({"x":118.65625,"y":56,"text-anchor":"start","text":"3A","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Label");
        
        // Label
        shape = this.canvas.paper.text(0,0,'3Y');
        shape.attr({"x":141.6640625,"y":55.5,"text-anchor":"start","text":"3Y","font-family":"\"Arial\"","font-size":8,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
C74LS04 = C74LS04.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});