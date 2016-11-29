angular.module('canvasTest',[])

.directive('mxCanvasTest', ['testData', 'canvasData', function(testData, canvasData){
	return {
		restrict: 'E',
	  templateUrl: 'canvastest/canvas-test.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "ct",
	  link: function(scope,element,attrs){
	  	scope.canvasData = canvasData
	  	scope.threads = testData.threads

	  	scope.move1 = attrs.moveOne
	  	scope.move2 = attrs.moveTwo

	  	var length = scope.threads.length

	  	scope.canvasData.generateImages(length, scope.move1, scope.move2)


	  	
	  },
	  controller: function() {
/*	  	var ct = this;
	  	ct.threads = testData.threads;
	  	var myArray = ct.threads.length
	  	ct.canvasData = canvasData;
	  	console.log('test')*/

/*	  	var test = [1,2,3]
	  	ct.canvasData.generateImages(test)
*/
	  }
	}
}])




.factory('canvasData', function(){
	var canvasData = {}

	canvasData.imageID = null;

	canvasData.generateImages = function(myArrayLength, param1, param2){
		for (var i=0; i<myArrayLength; i++){
	  	var canvas = document.getElementsByClassName("canvasTest")[i];
			var ctx = canvas.getContext("2d");
			ctx.beginPath(); 
			ctx.lineWidth="1.9";
			ctx.strokeStyle=randomRGBcolor();
			ctx.fillStyle = randomRGBcolor();
			ctx.fill();
			ctx.moveTo(0,param1);
			ctx.lineTo(50,30+param2);
			ctx.moveTo(123,param2);
			ctx.lineTo(150+param1,150);
			ctx.moveTo(param1,param2);
			ctx.lineTo(230,230);
			ctx.lineTo(60-param1,170);
			ctx.stroke();
		}
	}
	
	return canvasData

})