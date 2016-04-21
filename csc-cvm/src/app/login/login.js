angular.module('cvm.cscLoginCarouselGallery', ['ui.bootstrap.carousel', 'ngTouch'])
    .config(function config($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'loginCarouselGalleryCtrl',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data: {
                pageTitle: 'Login'
            }
        });
    })
    .controller('loginCarouselGalleryCtrl', function($scope, $modal) {

        angular.element('#hamburger-menu').css('display','none');
        
        $scope.slides = [{
            image: 'assets/bg.jpg',
            text1: 'JOURNEY TO THE',
            text2: 'DIGITAL ENTERPRISE',
            text3:'Join the Conversation'
        }, {
            image: 'assets/Coro2.jpg',
            text1: 'JOURNEY TO THE',
            text2: 'CLIENT VISIT',
            text3:'Join the Conversation'
        }, {
            image: 'assets/Coro3.jpg',
            text1: 'JOURNEY TO THE',
            text2: 'AGENDA',
            text3:'Join the Conversation'
        }, {
            image: 'assets/Coro4.jpg',
            text1: 'JOURNEY TO THE',
            text2: 'CSC',
            text3:'Join the Conversation'
        }];

        function moveToSlideWithOffset(offset){
            var index = ($('#login-carousel .active').index() + offset) % ($scope.slides.length);
            var modIndex = (((index) % ($scope.slides.length)) + ($scope.slides.length)) % ($scope.slides.length);
            $scope.slides[modIndex].active = true;
        }

        $scope.showNext = function() {
            moveToSlideWithOffset(1);
        };

        $scope.showPrev = function() {
            moveToSlideWithOffset(-1);
        };

        $scope.openLogin = function(){
            var modalView = $modal.open({
                templateUrl: 'login/loginCred/loginCred.tpl.html',
                controller: 'loginCredCtrl',
                backdrop: 'static',
                windowClass: 'modal-dialog-loginCred'
            });
        };
    });
