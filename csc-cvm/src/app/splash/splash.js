angular.module('cvm.splash', ['ui.router'])
    .config(function config($stateProvider) {
        $stateProvider.state('splash', {
            url: '/splash',
            views: {
                'main': {
                    controller: 'splashCtrl',
                    templateUrl: 'splash/splash.tpl.html'
                }
            },
            data: {
                pageTitle: 'Splash'
            }
        });
    })
    .controller('splashCtrl', function($scope, $state, commonService) {

        angular.element('#hamburger-menu').css('display','none');        

        $scope.slides = [
        {            
            text1: 'CSC IN NEWS',
            desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            text2: 'CSC QUICKFACTS',
            'desc2': [{text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}]
        }, {            
            text1: 'CSC IN NEWS',
            desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            text2: 'CSC QUICKFACTS',
            'desc2': [{text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}]
        }, {            
            text1: 'CSC IN NEWS',
            desc1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            text2: 'CSC QUICKFACTS',
            'desc2': [{text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
                     {text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}]
        }];
        
        $scope.goToHome = function(){
            $state.go('cvmHome');
        };
    });