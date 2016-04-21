angular.module('cvm.agendaOverview', ['ui.router'])
    .config(function config($stateProvider) {
        $stateProvider.state('agendaOverview', {
            url: '/agendaOverview',
            views: {
                "main": {
                    controller: 'agendaOverviewCtrl',
                    templateUrl: 'agendaOverview/agendaOverview.tpl.html'
                }
            },
            data: {
                pageTitle: 'Agenda Overview'
            }
        });
    })
    .controller('agendaOverviewCtrl', function($scope, $rootScope, $location, $modal, $state, $http, $anchorScroll, commonService, $timeout) {
        angular.element('#hamburger-menu').css('display', 'block');
        commonService.hideHamburgerMenu();

        $scope.days = [
            { day: 1, session: [1, 2, 3] },
            { day: 2, session: [1, 2] },
            { day: 3, session: [1, 2, 3] },
            { day: 4, session: [1] },
            { day: 5, session: [1, 2] }
        ];
        $scope.hideFeeedbackDiv = true;


        $timeout(function() {
            angular.element('#agendaMenu1').addClass('active');
            $location.hash('day1');
        }, 300);


        $scope.gotoAnchor = function(x) {
            var newHash = 'day' + x;
            // console.log($location.hash());

            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash('day' + x);
                angular.element(document.getElementsByClassName('active')).removeClass('active');
                angular.element('#agendaMenu' + x).addClass('active');
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };

        $scope.rotateFeedbackArrow = function(event) {
            event.stopPropagation();
            var myEl = angular.element(event.target);
            var feedback_section = myEl.parents('.agenda-session-block').find(".agenda-session-feedback-div");
            feedback_section.toggle();
            myEl.find('.feedback-triangle').toggle();
            if(feedback_section.css('display') == 'block'){
                myEl.find('.glyphicon-triangle-bottom').addClass('rotate-arrow');
            } else {
                myEl.find('.glyphicon-triangle-bottom').removeClass('rotate-arrow');
            }
        };

        $scope.goToSessionDetail = function() {
            $state.go('sessionDetails');
        };

        $scope.toggleFeedbackDialog = function(index, $event) {
            $scope.hideFeeedbackDiv = !$scope.hideFeeedbackDiv;
            $event.stopPropagation();
        };

        $scope.submitSuccess = function(event) {          

            var myElement = angular.element(event.target);
            // console.log(myElement);
            var feedback_section = (myElement.parent()).parent();
            var myEl1 = feedback_section.find('.feedback-form');
            myEl1.css('display', 'none');
            var myEl2 = feedback_section.find('.submit-success-text');
            myEl2.css('display', 'block');
        };

        angular.element('#agenda-scrollable-block').bind("scroll", function() {

            var headerHeight = angular.element('.agenda-header-div').height() + 1;
            var topElement = document.elementFromPoint(0, headerHeight);
            topElement = topElement.parentElement.id;

            var x = topElement.split("day");

            angular.element(document.getElementsByClassName('active')).removeClass('active');
            angular.element('#agendaMenu' + x[1]).addClass('active');
        });
    });
