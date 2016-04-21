angular.module('cvm.myVisits', ['ui.router'])
    .config(function config($stateProvider) {
        $stateProvider.state('myVisits', {
            url: '/myVisits',
            views: {
                "main": {
                    controller: 'myVisitsCtrl',
                    templateUrl: 'myVisits/myVisits.tpl.html'
                }
            },
            data: {
                pageTitle: 'My Visits'
            }
        });
    })
    .controller('myVisitsCtrl', function($scope, $rootScope, $location, $modal, $state, $http, $element, commonService) {
        angular.element('#hamburger-menu').css('display', 'block');
        commonService.hideHamburgerMenu();

        $scope.visit_details = [{}];

        $scope.showSortDropDown = function(event) {
            event.stopPropagation();
            $('.sortByDropDown').toggle();
            if ($('.sortByDropDown').css('display') == 'block') {
                $('.drop-down-img').addClass('up');
                $('.sortBy').addClass('with-border');
            } else {
                $('.drop-down-img').removeClass('up');
                $('.sortBy').removeClass('with-border');
            }
        };

        $scope.showActionDropDown = function(text, index, event) {
            event.stopPropagation();
            var el = angular.element(document.getElementById(text + index));
            el.find('.actionDropDown').toggle();
            el.find('.actionDropDown').css('top', 15 + "px");
        };

        $(document).bind('click', function() {
            $('.sortByDropDown').hide();
            $('.actionDropDown').hide();
            $('.sortBy').removeClass('with-border');
            $('.drop-down-img').removeClass('up');
        });

        $scope.performAction = function() {};

        $scope.navigateToPage = function(stateName) {
            $state.go(stateName);
        };

        $scope.goToSessionDetail = function() {
            $state.go('sessionDetails');
        };

        $scope.goToDashboard = function() {
            $state.go('dashBoard');
        };
    });
