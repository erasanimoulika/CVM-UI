angular.module('cvm.clientInformation', [])
    .config(function config($stateProvider) {
        $stateProvider.state('clientInformation', {
            url: '/clientInformation',
            views: {
                "main": {
                    controller: 'clientInformationCtrl',
                    templateUrl: 'clientInformation/clientInformation.tpl.html'
                }
            },
            data: {
                pageTitle: 'Client Information'
            }
        });
    })
    .controller('clientInformationCtrl', function($scope, $state) {

        angular.element('#hamburger-menu').css('display', 'none');

        $scope.representatives = [{
            'client_representatives': [{
                'name': 'Harry John',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }, {
                'name': 'Jayne Smith',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }, {
                'name': 'Rossy Hall',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }]
        }];

        $scope.past_events = [{
            'visit_date': '13/09/2015',
            'visit_name': 'Moto - Mobility Visit',
            'visit_details': 'Met my aggressive timeline requirement with very good quality'
        }, {
            'visit_date': '13/09/2014',
            'visit_name': 'Moto - Mobility Visit',
            'visit_details': 'Met my aggressive timeline requirement with very good quality'
        }];

        $scope.current_engagement = [{
            'project_name': 'Back Office Operations Project',
            'project_details': 'Met my aggressive timeline requirement with very good quality'
        }, {
            'project_name': 'Payment Project',
            'project_details': 'Met my aggressive timeline requirement with very good quality'
        }];

        $scope.prime_competitors = [{
            'image': 'assets/diversified.png'
        }, {
            'image': 'assets/healthcare.png'
        }, {
            'image': 'assets/insurance.png'
        }];

        $scope.collapseDiv = function(index, text) {
            var ele = angular.element(document.getElementById(text + index));
            ele.toggle();
            var status = window.getComputedStyle(ele[0], null).getPropertyValue("display");
            if (status === "block") {
                ele.prev().addClass('chevron-down-arrow');
                ele.addClass('active');
            } else if (status === "none") {
                ele.prev().removeClass('chevron-down-arrow');
                ele.removeClass('active');
            }
        };

        $scope.viewAgenda = function(event) {
            event.stopPropagation();
        };

        $scope.goBack = function() {
            $state.go('myVisits');
        };

    });
