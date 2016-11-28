angular.module('threadPreview',[])

.directive('mxThreadPreview', ['testData', 'threadData', function(testData, threadData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/threadPreview/thread-preview.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = threadData.threads;




	  }
  }
}])