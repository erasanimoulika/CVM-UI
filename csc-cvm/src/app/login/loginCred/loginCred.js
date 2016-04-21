angular.module('cvm.cscLoginCred', [])
    .controller("loginCredCtrl", function($scope, $modalInstance, $state) {
        $scope.closeLoginDialog = function() {
            $modalInstance.dismiss();
        };

        $scope.float_label = function(event) {
            var ele = angular.element(event.target);
            ele.prev().addClass('label-visible');
        };

        $scope.unfloat_label = function($event) {
            var ele = angular.element(event.target);
            if (ele.val() === "") {
                ele.prev().removeClass('label-visible');
            }
        };

        $scope.login = function() {
            $state.go('splash');
            $modalInstance.dismiss();            
        };
    });
