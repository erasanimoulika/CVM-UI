angular.module('cvm.cscSessionDetails', [])
    .config(function config($stateProvider) {
        $stateProvider.state('sessionDetails', {
            url: '/sessionDetails',
            views: {
                "main": {
                    controller: 'sessionDetailsCtrl',
                    templateUrl: 'session/session.tpl.html'
                }
            },
            data: {
                pageTitle: 'Session'
            }
        });
    })
    .controller('sessionDetailsCtrl', function($scope, $state) {
        angular.element('#hamburger-menu').css('display','none');
        
        $scope.session_details = [{
            'name': 'Mobility',
            'time': '10:30',
            'venue': 'Bedroom 2, 4th floor, EGL',
            'picture': 'assets/Chennai_Central_Station_panorama.jpg',
            'description': 'Mobility represents future. How enterprises interact with customers, employees, partners and machines as we increasingly access the internet and control the world from the palm of our hands.',
            'presenter': [{
                'picture': 'assets/profile-pic.png',
                'name': 'Mr Vincent Chase',
                'designation': 'Sr Analyst, CSC India',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }],
            'participants': [{
                'name': 'Mr Chris Hemsworth',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA'
            }, {
                'name': 'Mr John Anderson',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA'
            }, {
                'name': 'Mr Mary Hook',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, EMC Inc, IL, USA'
            }]
        }];

        $scope.feedback_form = function() {
            var myEl = angular.element(document.getElementsByClassName('session-feedback-form'));
            var header = angular.element(document.getElementsByClassName('header'));
            var feedback_button = angular.element(document.getElementsByClassName('feedback-button'));
            myEl.toggle();
            feedback_button.find('.feedback-triangle').toggle();
            if (myEl.css('display') === 'block') {
                header.addClass('no-padding');
                feedback_button.addClass('bold-text');
                feedback_button.find('.glyphicon-triangle-bottom').addClass('rotate-arrow');
            } else {
                header.removeClass('no-padding');
                feedback_button.removeClass('bold-text');
                feedback_button.find('.glyphicon-triangle-bottom').removeClass('rotate-arrow');
                feedback_button.find('.feedback-triangle').removeClass('feedback-triangle-color');
            }
        };

        $scope.goBack = function() {
            $state.go('agendaOverview');
        };

        $scope.submitSuccess = function() {
            var myEl = angular.element(document.getElementsByClassName('feedback-form'));
            myEl.css('display', 'none');
            var myEl2 = angular.element(document.getElementsByClassName('submit-success-text'));
            myEl2.css('display', 'block');
        };
    });
