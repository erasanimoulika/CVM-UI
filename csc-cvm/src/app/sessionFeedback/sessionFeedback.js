angular.module('cvm.feedback', [])
    .directive('feedback', function() {
        return {
            restrict: 'E',
            templateUrl: 'sessionFeedback/sessionFeedback.tpl.html',
            replace: true,
            controller: function($scope) {
                /*$scope.submitSuccess = function() {
                    var myEl = angular.element(document.getElementsByClassName('feedback-form'));
                    myEl.css('display', 'none');
                    var myEl2 = angular.element(document.getElementsByClassName('submit-success-text'));
                    myEl2.css('display', 'block');
                };*/
            }
        };
    });
