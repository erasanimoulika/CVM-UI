angular.module('cvm.thankyou', [])
    .config(function config($stateProvider) {
        $stateProvider.state('thankyou', {
            url: '/thankyou',
            views: {
                "main": {
                    controller: 'thankyouCtrl',
                    templateUrl: 'thankyou/thankyou.tpl.html'
                }
            },
            data: {
                pageTitle: 'Thank You'
            }
        });
    })
    .controller('thankyouCtrl', function($scope, $state, commonService, $timeout, $window) {
        angular.element('#hamburger-menu').css('display','block');
        commonService.hideHamburgerMenu();

        $timeout(function() {
            var ele = angular.element('.thankyou-sub-div');
            if(ele.width()  < 1243){ // as background-size is 'cover' for size above '1243px' and background-size is 'contain' for size below that.
                var diff = ele.height() - ele.width()/ 1.31;
                angular.element('.date').css('margin-top', -diff);                
            }
        }, 50);
    });
