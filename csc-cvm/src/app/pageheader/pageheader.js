angular.module( 'cvm.pageHeader', ['ngSanitize'])
.directive('pageHeader', function() {
	return {
		replace: true,
		restrict: 'E',
		scope: {
			appName: '=',
			userName: '='			
		},
		templateUrl: 'pageheader/pageheader.tpl.html',
		
		controller: function($scope) {
			$scope.status = {
				isopen: false
			};
		}
	};
});
