angular.module('appMessage', []).directive('appMessage', function () {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: '../commonDirectives/pageLayout/appMessage/appMessage.tpl.html',
        controller: function ($scope, appMessageSvc) {
            $scope.appMessageSvc = appMessageSvc;
            $scope.appMessageSvc.errorMsgs = [];
        }
    };
})
    .service('appMessageSvc', function ($timeout, appMessageSvcConfig) {
        var self = this;
        self.errorMsgs = [];
        self.successMsgs = [];

        var promiseE, promiseS;

        function scrollTop() {
            //angular.element('body').scrollTop(0);
            $('.main-view').animate({scrollTop: 0},0);
            if (document.documentElement) {
                document.documentElement.scrollTop = 0;//for IE
            }
        }

        self.addError = function (msg) {
            self.clear();
            if (!msg || msg == _.last(self.errorMsgs)) {
                return;
            }
            self.successMsgs = [];

            self.errorMsgs.push(msg);
            scrollTop();
            if (appMessageSvcConfig.autoCloseError) {
                if (promiseE) {
                    $timeout.cancel(promiseE);
                }
                promiseE = $timeout(function () {
                    self.errorMsgs = [];
                }, appMessageSvcConfig.errorMsgTimeout);
            }
        };

        self.addSuccess = function (msg) {
            self.clear();
            if (!msg || msg == _.last(self.errorMsgs)) {
                return;
            }
            self.errorMsgs = [];
            self.successMsgs.push(msg);
            scrollTop();
            if (appMessageSvcConfig.autoCloseSuccess) {
                if (promiseS) {
                    $timeout.cancel(promiseS);
                }
                promiseS = $timeout(function () {
                    self.successMsgs = [];
                }, appMessageSvcConfig.successMsgTimeout);
            }
        };

        self.hasError = function () {
            return self.errorMsgs.length > 0;
        };

        self.hasSuccess = function () {
            return self.successMsgs.length > 0;
        };

        self.clear = function () {
            self.clearError();
            self.clearSuccess();
        };

        self.clearError = function () {
            self.errorMsgs = [];
        };

        self.clearSuccess = function () {
            self.successMsgs = [];
        };
    })
    .value('appMessageSvcConfig', {
        successMsgTimeout: 5000,
        errorMsgTimeout: 10000,
        autoCloseSuccess: true,
        autoCloseError: false
    });