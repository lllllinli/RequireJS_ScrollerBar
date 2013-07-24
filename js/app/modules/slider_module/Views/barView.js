define(['jquery'
		,'app/modules/slider_module/Events/customEvent'
		,'app/modules/slider_module/Models/sliderModel'
		,'TweenMax'
	],function($,customEvent,sliderModel,TweenMax){
	var Constr
		,_barView
		,_moveTo;

	_moveTo= function(){
		console.log(sliderModel.getCurrB());
		var _num = sliderModel.getCurrB();
		TweenMax.to(_barView,0.5,{top:_num,ease:Power2.easeInOut});
	};

	Constr = function (_bar) {
		_barView = _bar;
		$(document).bind(customEvent.CHANGE_C_MODEL,_moveTo);	
	};
	
	Constr.prototype = {
		getbar:function(){return _barView;}
	};
		
	return Constr;
});