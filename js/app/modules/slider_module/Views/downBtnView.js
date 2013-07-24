define(['jquery'],function($){
	var Constr
		,_barView;

	Constr = function (_bar) {
		_barView = _bar;	
	};
	
	Constr.prototype = {
		getDownBtn:function(){return _barView;}
	};
		
	return Constr;
});