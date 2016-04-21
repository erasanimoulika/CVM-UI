angular.module('cvm', [
    'cvm.pageHeader',
    'cvm.splash',
    'cvm.home',
    'cvm.cscFactsheet',
    'cvm.cscLocationGallery',
    'cvm.agendaOverview',
    'cvm.exceptionHandler',
    'cvm.cscSessionDetails',
    'cvm.myVisits',
    'cvm.viewVisitAgenda',
    'cvm.dashBoard',

    'cvm.commonDirective',
    'cvm.HamMenu',
    'cvm.cscLoginCarouselGallery',
    'cvm.cscLoginCred',
    'cvm.cscExecBios',
    'cvm.cscSPOC',
    'cvm.feedback',
    'cvm.clientInformation',
    'cvm.overallFeedback',
    'cvm.thankyou',

    //mock backend
    //'appMock',
    'cvm.constants',
    'cvm.commonService',
    'commonDirectives.loadingTemplate',
    'appMessage',

    'ui.bootstrap',
    'ui.router',
    //'ui.grid',
    'restangular',
    'ngTouch',
    'templates-app',
    'templates-common',
    'cgBusy',
    'ngSanitize'

])

.config(function myAppConfig($stateProvider, $urlRouterProvider, RestangularProvider) {
    /*$urlRouterProvider.otherwise('/cvmHome');*/
    $urlRouterProvider.otherwise('/login');
})

.run(function run() {})

.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $q, appMessageSvc) {

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        //clear all error and success message when user navigate to another screen
        appMessageSvc.clear();

        if (angular.isDefined(toState.data.pageTitle)) {
            $rootScope.stateName = toState.data.pageTitle;
            $scope.pageTitle = toState.data.pageTitle + ' | CSC Client Visit Management';
        }
    });

    $scope.$watch(function() {
        return $rootScope.myPromise;
    }, function(newPromise) {
        $q.when(newPromise).then(null, function(err) {
            console.error('Error', err);
        });
    });
});
