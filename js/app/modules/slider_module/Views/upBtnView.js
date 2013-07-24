define(['jquery'],function($){
	var Constr
		,_upBtnView;



	Constr = function (_upBtn) {
		_upBtnView = _upBtn;	
	};
	
	Constr.prototype = {
		getUpBtn:function(){return _upBtnView;}
	};
		
	return Constr;
});