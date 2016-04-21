angular.module('cvm.home', ['ui.router'])
    .config(function config($stateProvider) {
        $stateProvider.state('cvmHome', {
            url: '/cvmHome',
            views: {
                "main": {
                    controller: 'cvmHomeCtrl',
                    templateUrl: 'cvmHome/cvmHome.tpl.html'
                }
            },
            data: {
                pageTitle: 'Home'
            }
        });
    })
    .controller('cvmHomeCtrl', function($scope, $rootScope, $location, $modal, $state, $interval, $filter, commonService) {
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {

        });
        $scope.progressDegree = 0;

        angular.element('#hamburger-menu').css('display','block');
        commonService.hideHamburgerMenu();

        $interval(function() {
            $scope.progressDegree = $scope.progressDegree + 10;
            if ($scope.progressDegree > 180) {
                $scope.progressDegree = $scope.progressDegree - 10;
            }
        }, 1000);

        $scope.dateNow = new Date();

        var visitDateTime = new Date();
        visitDateTime.setDate($scope.dateNow.getDate() + 1);

        $scope.visitStartSuccess = false;

        if ($scope.dateNow < visitDateTime) {
            $scope.visitStartSuccess = false;
            var myEl = angular.element(document.getElementsByClassName('clocks-display'));
            myEl.find('.arc').css('display','none');
            myEl.find('circle').addClass('clocks-circle-color');
            myEl.find('rect').addClass('clocks-rect-color');
        } else if ($scope.dateNow == visitDateTime){
            $scope.visitStartSuccess = true;
        }
    });
