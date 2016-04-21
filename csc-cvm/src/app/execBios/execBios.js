angular.module('cvm.cscExecBios', [])
    .config(function config($stateProvider) {
        $stateProvider.state('execBios', {
            url: '/execBios',
            views: {
                "main": {
                    controller: 'execBiosCtrl',
                    templateUrl: 'execBios/execBios.tpl.html'
                }
            },
            data: {
                pageTitle: 'Executive Bio'
            }
        });
    })
    .controller('execBiosCtrl', function($scope, $state, $window) {
        angular.element('#hamburger-menu').css('display','none');
        
        $scope.representatives = [{
            'csc_india_representatives': [{
                'name': 'Mr Ram',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, CSC, India',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }, {
                'name': 'Mr Sham',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, CSC, India',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }, {
                'name': 'Mrs Megha',
                'picture': 'assets/profile-pic.png',
                'designation': 'Sr Analyst, CSC, India',
                'bio': 'Met my aggressive timeline requirement with very good quality. Worked with me to come up with a viable solution to meet the timeline. Easy to work with and have the customers best interest in mind. You can find less expensive alternatives but the quality and responsiveness is well worth the price',
                'email': 'vincent@csc.com',
                'telephone': '+555 555 555'
            }],
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

        $scope.collapseDiv = function(index, text){
            var ele = angular.element(document.getElementById(text + index));
            ele.toggle();
            var status = window.getComputedStyle(ele[0], null).getPropertyValue("display");
            if(status === "block"){
                ele.prev().addClass('chevron-down-arrow');
                ele.addClass('active');
            } else if(status === "none") {
                ele.prev().removeClass('chevron-down-arrow');
                ele.removeClass('active');
            }
        };

        $scope.goBack = function() {
            $window.history.back();
        };
    });