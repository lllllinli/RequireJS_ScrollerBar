define(['jquery','app/modules/slider_module/Events/customEvent'],function($,customEvent){
	
	var PercentageModel = {
		currentP:0,
		totalP:100,
		changeP:function(_p){
			// console.log(_p);
			PercentageModel.currentP=PercentageModel.currentP+_p;
			
			if(PercentageModel.currentP<0){
				PercentageModel.currentP=0;
			}else if( PercentageModel.currentP > PercentageModel.totalP ){
				PercentageModel.currentP=PercentageModel.totalP;
			}
			
			PercentageModel.setCurrC(PercentageModel.currentP);
			PercentageModel.setCurrB(PercentageModel.currentP);

			$.event.trigger({type:customEvent.CHANGE_C_MODEL});
		},
		barChangeP:function(_p){
			PercentageModel.currentP = _p;
			PercentageModel.setCurrC(PercentageModel.currentP);
			PercentageModel.setCurrB(PercentageModel.currentP);
			$.event.trigger({type:customEvent.BAR_CHANGE_PERCENT});
		},
		currC:0,
		totalC:0,
		currB:0,
		totalB:0,
		setTotalC:function(_num){
			PercentageModel.totalC=_num;
		},
		setCurrC:function(_p){
			PercentageModel.currC = parseInt(_p / 100 * PercentageModel.totalC);
		},
		getCurrC:function(){
			return PercentageModel.currC;
		},
		setTotalB:function(_num){
			PercentageModel.totalB=_num;
		},
		setCurrB:function(_p){
			PercentageModel.currB =parseInt(_p / 100 * PercentageModel.totalB);
		},
		getCurrB:function(){
			return PercentageModel.currB;
		}
		,barOffset:0
	};

	return PercentageModel;
});