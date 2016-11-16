/**
 * Created by Chen Yazheng on 16/10/20
 */
// ToDo: control #navigation with this Class
tot.Palette = Class.extend({
	/**
	 * @constructor 
	 * 
	 * @param {String} canvasId the id of the DOM element to use as paint container
	 */
	init: function(id, app, limits)
	{
		var _this = this;
        this.limits = limits;
        for (i in limits) {
            $("span.badge#" + i).html(limits[i].limit);
        }
	}
});
