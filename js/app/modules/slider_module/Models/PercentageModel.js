define(['jquery'],function($){
	
	var PercentageModel = {
		currentP:0,
		totalP:100,
		changeP:function(_p){
			PercentageModel.currentP=PercentageModel.currentP+_p;
			
			if(PercentageModel.currentP<0){
				PercentageModel.currentP=0;
			}else if(PercentageModel.currentP>PercentageModel.totalP){
				PercentageModel.currentP=PercentageModel.totalP;
			}
			$.event.trigger({type:customEvent.CHANGE_C_MODEL});
		}
	};

	return PercentageModel;
});