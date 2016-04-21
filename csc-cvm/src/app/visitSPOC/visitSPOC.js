angular.module('cvm.cscSPOC', [])
    .config(function config($stateProvider) {
        $stateProvider.state('spoc', {
            url: '/spoc',
            views: {
                "main": {
                    controller: 'spocCtrl',
                    templateUrl: 'visitSPOC/visitSPOC.tpl.html'
                }
            },
            data: {
                pageTitle: 'SPOC'
            }
        });
    })
    .controller('spocCtrl', function($scope, $modal, $state) {
        angular.element('#hamburger-menu').css('display','none');
        
        $scope.spoc_details = [{
            'picture': 'assets/profile-pic.png',
            'name': 'Mr Vincent Chase',
            'designation': 'Sr Analyst, CSC, Bangalore',
            'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
            'email': 'vincent@csc.com',
            'telephone': [
                '+555 555 5555',
                '+91 923 823 0982'
            ]
        }];

        $scope.goBack = function () {
            $state.go('cvmHome');
        };
    });