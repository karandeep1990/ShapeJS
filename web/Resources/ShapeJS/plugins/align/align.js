(function(){
	function setToolbar(shapejs){
		var canvas = shapejs.canvas;
				
		function setObjectsAlign(){
			var alignTo = this.value;
			var x;
			var y;
			var curObj;
			var temp;
			var tempObj;
			
			if(canvas.getActiveGroup()){
		        for (var i in canvas.getActiveGroup().objects){
		        	curObj = canvas.getActiveGroup().objects[i];
		        	tempObj = null;
		        	if (curObj.cropEl){
		        		tempObj = {
		        			left: curObj.left + curObj.cropEl.cropLeft*curObj.scaleX,
		        			top: curObj.top + curObj.cropEl.cropTop*curObj.scaleY,
		        			width: curObj.cropEl.width*curObj.cropEl.scaleX*curObj.scaleX,
		        			height: curObj.cropEl.height*curObj.cropEl.scaleY*curObj.scaleY
		        		}
	        		}
		        	
		        	if (alignTo == 'left'){
		        		if (!x) x = 99999;
		        		if (!tempObj && x > curObj.left) x = curObj.left;
		        		else if (tempObj && x > tempObj.left) x = tempObj.left;
		        		
		        	}else if (alignTo == 'right'){
		        		if (!x) x = -99999;
		        		if (!tempObj && x < curObj.left + curObj.width*curObj.scaleX) x = curObj.left + curObj.width*curObj.scaleX;
		        		else if (tempObj && x < tempObj.left + tempObj.width) x = tempObj.left + tempObj.width;
		        		
		        	}else if (alignTo == 'top'){
		        		if (!y) y = 99999;
		        		if (!tempObj && y > curObj.top) y = curObj.top;
		        		else if (tempObj && y > tempObj.top) y = tempObj.top;
		        	
		        	}else if (alignTo == 'bottom'){
		        		if (!y) y = -99999;
		        		if (!tempObj && y < curObj.top + curObj.height*curObj.scaleY) y = curObj.top + curObj.height*curObj.scaleY;
		        		else if (tempObj && y < tempObj.top + tempObj.height) y = tempObj.top + tempObj.height;
		        		
		        	}else if (alignTo == 'center'){
		        		if (!x) x = curObj.left + curObj.width*curObj.scaleX/2;
		        		if (tempObj) x = tempObj.left + tempObj.width/2;
		        		if (!y) y = curObj.top + curObj.height*curObj.scaleY/2;
		        		if (tempObj) y = tempObj.top + tempObj.height/2;
		        		
		        	}else if (alignTo == 'centerX'){
		        		if (!x) x = curObj.left + curObj.width*curObj.scaleX/2;
		        		if (tempObj) x = tempObj.left + tempObj.width/2;
		        		
		        	}else if (alignTo == 'centerY'){
		        		if (!y) y = curObj.top + curObj.height*curObj.scaleY/2;
		        		if (tempObj) y = tempObj.top + tempObj.height/2;
		        	
		        	}
		        }
		        for (var i in canvas.getActiveGroup().objects){
		        	curObj = canvas.getActiveGroup().objects[i];
		        	tempObj = null;
		        	if (curObj.cropEl){
		        		tempObj = {
		        			left: curObj.left + curObj.cropEl.cropLeft*curObj.scaleX,
		        			top: curObj.top + curObj.cropEl.cropTop*curObj.scaleY,
		        			width: curObj.cropEl.width*curObj.cropEl.scaleX*curObj.scaleX,
		        			height: curObj.cropEl.height*curObj.cropEl.scaleY*curObj.scaleY
		        		}
	        		}
		        	
		        	if (alignTo == 'left' && x){
		        		curObj.left = x;
		        		if (curObj.cropEl){
		        			curObj.left = x - curObj.cropEl.cropLeft*curObj.scaleX;
		        		}
		        		
		        	}else if (alignTo == 'right' && x){
		        		curObj.left = x - curObj.width*curObj.scaleX;
		        		if (tempObj){
		        			curObj.left = x - (tempObj.width + curObj.cropEl.cropLeft*curObj.scaleX);
		        		}
		        		
		        	}else if (alignTo == 'top' && y){
		        		curObj.top = y;
		        		if (curObj.cropEl){
		        			curObj.top = y - curObj.cropEl.cropTop*curObj.scaleY;
		        		}
		        		
		        	}else if (alignTo == 'bottom' && y){
		        		curObj.top = y - curObj.height*curObj.scaleY;
		        		if (tempObj){
		        			curObj.top = y - (tempObj.height + curObj.cropEl.cropTop*curObj.scaleY);
		        		}
		        	}else if (alignTo == 'center'){
		        		curObj.left = x - curObj.width*curObj.scaleX/2
		        		curObj.top = y - curObj.height*curObj.scaleY/2
		        		if (tempObj){
		        			curObj.left = x - curObj.cropEl.cropLeft*curObj.scaleX - tempObj.width/2;
		        			curObj.top = y - curObj.cropEl.cropTop*curObj.scaleY - tempObj.height/2;
		        		}
		        		
		        	}else if (alignTo == 'centerX'){
		        		curObj.left = x - curObj.width*curObj.scaleX/2
		        		if (tempObj){
		        			curObj.left = x - curObj.cropEl.cropLeft*curObj.scaleX - tempObj.width/2;
		        		}
		        		
		        	}else if (alignTo == 'centerY'){
		        		curObj.top = y - curObj.height*curObj.scaleY/2
		        		if (tempObj){
		        			curObj.top = y - curObj.cropEl.cropTop*curObj.scaleY - tempObj.height/2;
		        		}
		        		
		        	}else{
		        		throw "no alignment matched";
		        	}
			    	curObj.setCoords();
		        }
		    }else if(canvas.getActiveObject()){
		    	curObj = canvas.getActiveObject();
		    	
		    	if (curObj.cropEl){
	        		tempObj = {
	        			left: curObj.left + curObj.cropEl.cropLeft*curObj.scaleX,
	        			top: curObj.top + curObj.cropEl.cropTop*curObj.scaleY,
	        			width: curObj.cropEl.width*curObj.cropEl.scaleX,
	        			height: curObj.cropEl.height*curObj.cropEl.scaleY
	        		}
        		}
		    	
		    	if (alignTo == 'left'){
	        		curObj.left = 0;
	        		if (curObj.cropEl){
	        			curObj.left = 0 - curObj.cropEl.cropLeft*curObj.scaleX;
	        		}
	        	}else if (alignTo == 'right'){
	        		curObj.left = canvas.width - curObj.width*curObj.scaleX;
	        		if (curObj.cropEl){
	        			curObj.left = canvas.width - (tempObj.width + curObj.cropEl.cropLeft*curObj.scaleX);
	        		}
	        	}else if (alignTo == 'top'){
	        		curObj.top = 0;
	        		if (curObj.cropEl){
	        			curObj.top = 0 - curObj.cropEl.cropTop*curObj.scaleY;
	        		}
	        		
	        	}else if (alignTo == 'bottom'){
	        		curObj.top = canvas.height - curObj.height*curObj.scaleY;
	        		if (curObj.cropEl){
	        			curObj.top = canvas.height - (tempObj.height + curObj.cropEl.cropTop*curObj.scaleY);
	        		}
	        		
	        	}else if (alignTo == 'center'){
	        		curObj.left = (canvas.width - curObj.width*curObj.scaleX)/2;
	        		curObj.top = (canvas.height - curObj.height*curObj.scaleY)/2;
	        		if (tempObj){
	        			curObj.left = canvas.width/2 - curObj.cropEl.cropLeft*curObj.scaleX - tempObj.width/2;
	        			curObj.top = canvas.height/2 - curObj.cropEl.cropTop*curObj.scaleY - tempObj.height/2;
	        		}
	        		
	        	}else if (alignTo == 'centerX'){
	        		curObj.left = (canvas.width - curObj.width*curObj.scaleX)/2;
	        		if (tempObj){
	        			curObj.left = canvas.width/2 - curObj.cropEl.cropLeft*curObj.scaleX - tempObj.width/2;
	        		}
	        		
	        	}else if (alignTo == 'centerY'){
	        		curObj.top = (canvas.height - curObj.height*curObj.scaleY)/2;
	        		
	        		if (tempObj){
	        			curObj.top = canvas.height/2 - curObj.cropEl.cropTop*curObj.scaleY - tempObj.height/2;
	        		}
	        		
	        	}else{
	        		throw "no alignment matched";
	        	}
		    	curObj.setCoords();
		    }
			canvas.trigger('object:modified');
			canvas.renderAll();
		}
		
		/*Text Align Code*/
		var align = document.createElement('li');
		var alignLeft = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-left"></i></a>');
		var alignRight = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-right"></i></a>');
		var alignTop = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-left fa-rotate-90"></i></a>');
		var alignBottom = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-right fa-rotate-90"></i></a>');

		ShapeJS.util.appendMultipleChildren(align, [
			alignLeft, alignTop, alignBottom, alignRight
		]);
		
		alignLeft.value = 'left';
		alignTop.value = 'top';
		alignBottom.value = 'bottom';
		alignRight.value = 'right';
		
		alignLeft = ShapeJS.util.createButton(alignLeft);
		alignLeft.addEventListener('click', setObjectsAlign);

		alignTop = ShapeJS.util.createButton(alignTop);
		alignTop.addEventListener('click', setObjectsAlign);
		
		alignBottom = ShapeJS.util.createButton(alignBottom);
		alignBottom.addEventListener('click', setObjectsAlign);
		
		alignRight = ShapeJS.util.createButton(alignRight);
		alignRight.addEventListener('click', setObjectsAlign);
		
		var alignCenters = document.createElement('li');
		var alignCenterX = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-center"></i></a>');
		var alignCenterY = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-center fa-rotate-90"></i></a>');
		var alignCenter = ShapeJS.util.createHTMLElement('<a><i class="fa fa-align-justify"></i></a>');
		
		ShapeJS.util.appendMultipleChildren(alignCenters, [
			alignCenterX, alignCenterY, alignCenter
		]);

		alignCenter.value = 'center';
		alignCenterX.value = 'centerX';
		alignCenterY.value = 'centerY';
		
		alignCenter = ShapeJS.util.createButton(alignCenter);
		alignCenter.addEventListener('click', setObjectsAlign);
		
		alignCenterX = ShapeJS.util.createButton(alignCenterX);
		alignCenterX.addEventListener('click', setObjectsAlign);
		
		alignCenterY = ShapeJS.util.createButton(alignCenterY);
		alignCenterY.addEventListener('click', setObjectsAlign);
		
		shapejs.addSubToolbarActions(align, 'alignFamily');
		shapejs.addSubToolbarActions(alignCenters, 'alignCenterFamily');

	}
	/**/
	ShapeJS.plugins['align'] = function(shapejs, options){
		var canvas = shapejs.canvas;

		var selectedEl = null;
		//=============================================================
		//==================Helper Functions===========================
		//=============================================================
		/*
			Make the drop down and dropdown button
		*/
		var alignBtn = '<i class="fa fa-align-left"></i>';
		alignBtn = ShapeJS.util.createHTMLElement(alignBtn);
		alignBtn = shapejs.createToolboxButton(alignBtn, {
			alt:"Align Selected Objects"
		});//creates an element wrapped in <li>	

		alignBtn.activate = function(){
			shapejs.clearSubToolbarActions();
			setToolbar(shapejs);
		}

		alignBtn.deactivate = function(){
			shapejs.clearSubToolbarActions();
		}

		shapejs.addToolboxButton(alignBtn, 'align');

	}
}());