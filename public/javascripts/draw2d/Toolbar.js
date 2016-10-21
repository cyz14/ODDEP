/**
 * Created by Chen Yazheng on 16/10/20.
 */

tot.Toolbar = Class.extend({
    init: function (elementId, app, view) {
        $( "#radio" ).buttonset();
        this.view = view;
        
        $('#radio>input').click(function() {

            var defaultRouterClassName =$(this).data("router");
            app.setDefaultRouterClassName(defaultRouterClassName);
            var router = eval("new "+defaultRouterClassName+"()");
          
            view.getLines().each(function(i,line){
                line.setRouter(router);
            });
        });
    }
	
});
