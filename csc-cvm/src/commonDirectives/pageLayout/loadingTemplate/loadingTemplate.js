var appDirModule = angular.module('commonDirectives.loadingTemplate', []);
appDirModule.directive('loadingTemplate', function ($compile, loadingConstants) {
    return {
        restrict: 'A',
        priority: 0,
        link: function (scope, element, attrs, ngModelCtrl) {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            var newBinding = attrs.cgBusy.substr(0, attrs.cgBusy.length - 1);
            newBinding += ", templateUrl:";
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                newBinding += loadingConstants.ios;
            } else if (userAgent.match(/Android/i)) {
                newBinding += loadingConstants.android;
            } else {
                newBinding += loadingConstants.desktop;
            }
            newBinding += " }";
            attrs.$set('cgBusy', newBinding);
            $compile(element.contents())(scope);
        }
    };
}).constant('loadingConstants', {
    ios: "'../commonDirectives/pageLayout/loadingTemplate/iosTemplate.tpl.html'",
    android: "'../commonDirectives/pageLayout/loadingTemplate/androidTemplate.tpl.html'",
    desktop: "'../commonDirectives/pageLayout/loadingTemplate/desktopTemplate.tpl.html'"
});