angular.module('cvm.HamMenu', [])
    .directive('hamMenu', function() {
        return {
            restrict: 'E',
            templateUrl: 'hamBurgerMenu/hamBurgerMenu.tpl.html',
            replace: true,
            controller: function($scope, commonService) {
                $('#menu-list').addClass('inner');
                $scope.openMenu = function() {
                     $('.modal-backdrop').css('display','block');
                     $('#menu-list').removeClass('inner');
                     $('.view-main-div').css('overflow','hidden');
                };

                $scope.closeHamburgerMenu = function(){
                    commonService.hideHamburgerMenu();
                };
            }
        };
    });