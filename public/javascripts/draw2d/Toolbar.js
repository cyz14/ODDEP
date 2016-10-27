/**
 * Created by Chen Yazheng on 16/10/20.
 */

// ToDo: 添加commandStack的支持，提供Redo，Undo，Delete功能
// ToDo: 支持导线的修改操作。发现采用 Interactive Manhattan Router 可以实现电线的修改。继承之后实现非交叉导线的Bridge功能应该可以满足电路连线要求。
// ToDo: 支持导线的颜色选择
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
    },

    
	
});
