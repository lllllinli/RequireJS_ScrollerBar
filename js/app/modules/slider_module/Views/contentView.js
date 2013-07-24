define([
		'jquery'
		,'app/modules/slider_module/Events/customEvent'
		,'app/modules/slider_module/Models/sliderModel'
		,'TweenMax'
	]
	,function($,customEvent,sliderModel,TweenMax) {
		

		// content View 
		var	Constr
			,_contentView
			,_moveTo;

		_moveTo = function(){
			console.log(sliderModel.getCurrC());
			var _num = sliderModel.getCurrC();
			TweenMax.to(_contentView,0.5,{top:-_num,ease:Power2.easeInOut});
		};

		Constr = function (_content) {
			_contentView = _content;
			$(document).bind(customEvent.CHANGE_C_MODEL,_moveTo);
			$(document).bind(customEvent.BAR_CHANGE_PERCENT,_moveTo);
		};
		
		Constr.prototype = {
			moveTo:_moveTo
			,getContenView:function(){return _contentView;}
		};
			
		return Constr;

    }
);