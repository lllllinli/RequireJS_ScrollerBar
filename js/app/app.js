/*
*  require js config 後的第一個進入點
*/
requirejs(['jquery','TweenMax','app/modules/slider_module/SliderApp'],function($,TweenMax,SliderApp){
	
	//
	var _sliderApp=new SliderApp();
	_sliderApp.init($('#wrapper'));
});
