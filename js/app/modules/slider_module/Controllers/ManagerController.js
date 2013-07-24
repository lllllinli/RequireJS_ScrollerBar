define(
	[
		'jquery',
		'app/modules/slider_module/Models/sliderModel',
		'app/modules/slider_module/Events/customEvent'
	]
	,function($,sliderModel,customEvent){
	
		var ManagerController = {
			addEventLiener:function(dom,eType,distence){
				var _d = distence;
				dom.bind(eType,function(e){
					sliderModel.changeP(distence);
					e.preventDefault();
				});
			},
			addSlider:function(dom,eType,_d){
				

				_mousemoveH=function(e){
					e.preventDefault();
					var _totalB= sliderModel.totalB;
					var _top= e.screenY - $('.sliber-handler').height()+70;
					var _percent=0;
					
					_top=(_top < 0 ) ? 0 : _top;
					_top=( _top > _totalB) ? _totalB : _top;
					
					dom.css('top',_top);

					_percent = parseInt( _top / _totalB * 100 );
					console.log( _percent );
					sliderModel.barChangeP( _percent );
				};

				dom.bind(eType,function(e){
					sliderModel.barOffset=e.offsetY;
					$(document).bind('mousemove',_mousemoveH);
				});
				$(document).bind('mouseup',function(e){
					console.log('up');
					$(document).unbind('mousemove',_mousemoveH);
				});
			},
			addWheelEvent:function(dom,eType,_d){
				var _mouseleaveH,_mouseenterH;

				_mouseleaveH=function(e){
					if (window.removeEventListener)
					        window.removeEventListener('DOMMouseScroll', wheel, false);
					window.onmousewheel = null;
					document.onmousewheel = null;
				};
				_mouseenterH=function(e){
					
					if (window.addEventListener)
					        window.addEventListener('DOMMouseScroll', wheel, false);
					window.onmousewheel = document.onmousewheel = wheel;
				};


				dom.bind('mouseleave',_mouseleaveH);
				dom.bind('mouseenter',_mouseenterH);
				
				function handle(delta) {
				        if (delta < 0){
				        	console.log('0+');
				        	sliderModel.changeP(_d);
				        }else{
				        	console.log('0-');
				        	sliderModel.changeP(-_d);
				        }
				}
				function wheel(event){
				        var delta = 0;
				        if (!event)
				                event = window.event;
				        if (event.wheelDelta) {
				                delta = event.wheelDelta/120;
				        } else if (event.detail) {
				                delta = -event.detail/3;
				        }
				        
				        if (delta)
				                handle(delta);
				        
				        if (event.preventDefault)
				                event.preventDefault();
					event.returnValue = false;
				}

				
			}
		};

		ManagerController.execute = function (commad) {
			this[commad.fun](commad.dom,commad.eType,commad.distence);
		};

		return ManagerController;
});