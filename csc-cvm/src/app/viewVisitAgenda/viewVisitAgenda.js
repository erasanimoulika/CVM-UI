angular.module('cvm.viewVisitAgenda', [])
    .config(function config($stateProvider) {
        $stateProvider.state('viewVisitAgenda', {
            url: '/viewVisitAgenda',
            views: {
                "main": {
                    controller: 'viewVisitAgendaCtrl',
                    templateUrl: 'viewVisitAgenda/viewVisitAgenda.tpl.html'
                }
            },
            data: {
                pageTitle: 'View Visit Agenda'
            }
        });
    })
    .controller('viewVisitAgendaCtrl', function($scope , $state) {

        angular.element('#hamburger-menu').css('display', 'none');

        $scope.goBack = function () {
            $state.go('myVisits');
        };
        $scope.goToAgenda = function(){
            $state.go('agendaOverview');
        };
    });
