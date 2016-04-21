angular.module('cvm.cscFactsheet', ['ui.router', 'cvm.commonService'])
    .config(function config($stateProvider) {
        $stateProvider.state('cscFactsheet', {
            url: '/cscFactsheet',
            views: {
                "main": {
                    controller: 'cscFactsheetCtrl',
                    templateUrl: 'cscFactsheet/cscFactsheet.tpl.html'
                }
            },
            data: {
                pageTitle: 'CSC Fact Sheet'
            }
        });
    })
    .controller('cscFactsheetCtrl', function ($scope, $rootScope, $location, $modal, $state, commonService, $anchorScroll) {
        angular.element('#hamburger-menu').css('display','none');
        $location.hash('quickFacts');

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

        });

        commonService.getCscIndiaLocations().then(function(result){
            $scope.cscIndiaLocations = result;
        });

        $scope.openGallery = function (cityName) {
            console.log(cityName);
            var modalView = $modal.open({
                templateUrl: 'cscFactsheet/cscLocationGallery/cscLocationGallery.tpl.html',
                controller: 'cscLocationGalleryCtrl',
                backdrop: 'static',
                windowClass: 'modal-dialog-cscLocationGallery',
                resolve: {
                    cscLocation: function () {
                        return cityName;
                    }
                }
            });
        };

        $scope.goBack = function () {
            $state.go('cvmHome');
        };

        $scope.openFactsheetMenu = function(){
            /*console.log("openFactsheetMenu");*/          
            angular.element('body').css('overflow' , 'hidden');
            $scope.openFactsheetMenuFlag = $scope.openFactsheetMenuFlag ? false : true;
        };

        $scope.scrollToDiv = function(scrolledToDiv){
          $scope.openFactsheetMenuFlag = false;
          angular.element('body').css('overflow' , 'scroll');
          // console.log(scrolledToDiv);

           var newHash = scrolledToDiv;
            // console.log($location.hash());

            if ($location.hash() !== newHash) {
                // set the $location.hash to `newHash` and
                // $anchorScroll will automatically scroll to it
                $location.hash(scrolledToDiv);                
            } else {
                // call $anchorScroll() explicitly,
                // since $location.hash hasn't changed
                $anchorScroll();
            }
        };

        /***** India journey js code **************/
        commonService.getJourneyImages().then(function(result){
            $scope.journeyImages = result;
        });

        $scope.service_portfolio_cards = [{
            'card_list': [
                'SAP, Oracle & Other ERP',
                'ECM, EAI & Middleware',
                'Database',
                'Web technologies',
                'Testing',
                'Mainframe & Other Legacy'
            ],
            'card_heading': 'global business services',
            'card_abbr': 'gbs'
        }, {
            'card_list': [
                'Insurance - Life, Annuities & General',
                'Banking and Payment Services',
                'Healthcare'
            ],
            'card_heading': 'industry software',
            'card_abbr': 'is'
        }, {
            'card_list': [
                'Big Data & Analytics',
                'Cybersecurity',
                'Mobile & Social',
                'Internet of Things'
            ],
            'card_heading': 'emerging business',
            'card_abbr': 'eb'
        }, {

            'card_list': [
                'Insurance Processes - Life, Annuities, Property & Casuality',
                'Workplace',
                'Service Management'
            ],
            'card_heading': 'business process services',
            'card_abbr': 'bps'
        }, {

            'card_list': [
                'Data Center & Connectivity',
                'Platform',
                'Workplace',
                'Service Management'
            ],
            'card_heading': 'global infrastructure services',
            'card_abbr': 'gis'
        }];
    });