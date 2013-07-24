define(['jquery'],function($){
	
	var ManagerController = {
		addEventLiener:function(dom,eType,distence){
			var _d = distence;
			dom.bind(eType,function(e){
				console.log(distence);
			});
		}
	};

	ManagerController.execute = function (commad) {
		// console.log(commad.dom);
		this[commad.fun](commad.dom,commad.eType,commad.distence);
	};

	return ManagerController;
});