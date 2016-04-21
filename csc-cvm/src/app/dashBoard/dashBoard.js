angular.module('cvm.dashBoard', [])
    .config(function config($stateProvider) {
        $stateProvider.state('dashBoard', {
            url: '/dashBoard',
            views: {
                "main": {
                    controller: 'dashBoardCtrl',
                    templateUrl: 'dashBoard/dashBoard.tpl.html'
                }
            },
            data: {
                pageTitle: 'CViz Dashboard'
            }
        });
    })
    .controller('dashBoardCtrl', function($scope, commonService) {
        angular.element('#hamburger-menu').css('display', 'block');
        commonService.hideHamburgerMenu();

        $scope.dashBoard_tiles = [{
            'tile_name': 'Home',
            'tile_img': 'assets/chennai-thumb-1.jpg',
            'tile_content': ''
        }, {
            'tile_name': 'Session',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Exec Bios',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Client',
            'tile_img': 'assets/clients.png',
            'tile_content': ''
        }, {
            'tile_name': 'SPOC',
            'tile_img': 'assets/1-foundation.png',
            'tile_content': ''
        }, {
            'tile_name': 'People',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Calendar',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'News',
            'tile_img': 'assets/diversified.png',
            'tile_content': ''
        }, {
            'tile_name': 'Outlook',
            'tile_img': 'assets/chennai-thumb-4.jpg',
            'tile_content': ''
        }, {
            'tile_name': 'Skype',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Pictures',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Documents',
            'tile_img': 'assets/professionals.png',
            'tile_content': ''
        }, {
            'tile_name': 'Assets',
            'tile_img': 'assets/chennai-thumb-4.jpg',
            'tile_content': ''
        }, {
            'tile_name': 'Drive',
            'tile_img': 'assets/india-map.png',
            'tile_content': ''
        }, {
            'tile_name': 'Pictures',
            'tile_img': '',
            'tile_content': 'CSC journey begins with the world biggest customers'
        }, {
            'tile_name': 'Google',
            'tile_img': 'assets/6-executiveBios.png',
            'tile_content': ''
        }];

        var myColors = [
            '#EF2525', '#88ba41', '#850057', '#003f60', '#588ba3'
        ];
        var i = 0;
        setTimeout(function() {
            $('div.tiles').each(function() {
                $(this).css('background-color', myColors[i]);
                i = (i + 1) % myColors.length;
            });
        }, 10);

    });
