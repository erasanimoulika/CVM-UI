angular.module('cvm.appHeader', [])
	.directive('appHeader', function() {
		return {
			replace: true,
			restrict: 'E',
			scope: {
				headerText: '='
			},
			templateUrl: 'appheader/appheader.tpl.html'
		};
	});