define(['jquery'],function($){
	
	var contentModel = {
			totalDistence:0,
			currentDistence:0,
			getTotalDistence:function(){
				return contentModel.totalDistence;
			},
			setTotalDistence:function(distence){
				contentModel.totalDistence = distence;
			},
			getCurrentDistence:function(){
				return contentModel.currentDistence;
			},
			setCurrentDistence:function(distence){
				contentModel.currentDistence=distence
			},
			addDistence:function(_d){
				contentModel.currentDistence=contentModel.currentDistence+_d;
				if(contentModel.currentDistence > 0){
					contentModel.currentDistence = 0;
				}else if(contentModel.currentDistence<-contentModel.totalDistence){
					contentModel.currentDistence=-contentModel.totalDistence;
				}
			}
	};
		

	return contentModel;
});