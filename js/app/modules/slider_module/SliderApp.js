define(
	[
		'jquery',
		'app/modules/slider_module/Views/contentView',
		'app/modules/slider_module/Views/upBtnView',
		'app/modules/slider_module/Views/downBtnView',
		'app/modules/slider_module/Views/barView',
		'app/modules/slider_module/Controllers/ManagerController',
		'app/modules/slider_module/Models/sliderModel'
	]
	,function(
		$,
		contentView,
		upBtnView,
		downBtnView,
		barView,
		ManagerController,
		sliderModel
		) {
		

		// 處理所有 Content View 
		var	Constr
			,_init
			,_setContenter;
		
		_init=function(_dom){

			_setContenter( _dom );

			var _content = new contentView(_dom.find('.sliber-content'));
			var _upBtn =new upBtnView( _dom.find('.sliber-upBtn'));
			var _downBtn =new downBtnView( _dom.find('.sliber-downBtn'));
			var _bar =new barView(_dom.find('.sliber-bar'));

			// Model 記住 content 、 bar 可以捲動的最大值
			sliderModel.setTotalC(_content.getContenView().height()-_dom.height());
			sliderModel.setTotalB($('.sliber-handler').height()-_bar.getbar().height());

			ManagerController.execute({ 
				dom : _upBtn.getUpBtn()
				,fun:'addEventLiener'
				,eType:'click'
				,distence:-20
			});
			
			ManagerController.execute({ 
				dom : _downBtn.getDownBtn()
				,fun:'addEventLiener'
				,eType:'click'
				,distence:20
			});

			ManagerController.execute({ 
				dom : _bar.getbar()
				,fun:'addSlider'
				,eType:'mousedown'
				,distence:0
			});

			ManagerController.execute({ 
				dom : _dom
				,fun:'addWheelEvent'
				,eType:''
				,distence:10
			});

		};

		_setContenter=function( _dom ){
			this.contenter = _dom;
		};

		Constr = function () {
			this.name = 'SliderApp';
			console.log("New App");
		};
		
		Constr.prototype = {
			init : _init ,
			contenter : {} ,
			setContenter : _setContenter
		};
			
		return Constr;

    }
);