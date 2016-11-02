var showJSON = true;
var app;
$(window).load( function(){
    app = new tot.Application();
    //- app.load(testCircuit);
    if (showJSON === true) {
        // add an event listener to the Canvas for change notifications.
        //
        app.view.getCommandStack().addEventListener( function(e){
            if(e.isPostChangeEvent()) {
                // logCanvas(app.view);
            } 
        });
    }
});
