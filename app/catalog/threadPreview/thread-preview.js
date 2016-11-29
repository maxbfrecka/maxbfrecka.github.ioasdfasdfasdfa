angular.module('threadPreview',[])

.directive('mxThreadPreview', ['testData', 'threadData', 'imageBotData', function(testData, threadData, imageBotData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/threadPreview/thread-preview.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = threadData.threads;
	  	scope.generateImage = imageBotData.generateImage

	  	//gets imageID from init variable to pass around
	  	imageBotData.imageID = scope.image;

	  	console.log("scope.image is " + scope.image)
	  	console.log("imagebotdata.image is " + imageBotData.imageID)

	  	function imgError(image){
  			image.parentNode.parentNode.style.display = 'none';
			}




		}
  }
}])