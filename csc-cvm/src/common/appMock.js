angular.module('appMock', ['ngMockE2E'])
    .run(function ($httpBackend) {

        var a1 = {};
        $httpBackend.whenGET(new RegExp('/api/v1/')).respond(a1); 
    
        var feedback = [];
        $httpBackend.whenPOST(new RegExp('/api/v1/')).respond(feedback);

        var a2 = [];
        $httpBackend.whenDELETE(new RegExp('/api/v1/')).respond(a2);
    
        $httpBackend.whenGET(new RegExp('/api/v1/')).passThrough();
        $httpBackend.whenPUT(new RegExp('/api/v1/')).passThrough();
        $httpBackend.whenPOST(new RegExp('/api/v1/')).passThrough();
        $httpBackend.whenDELETE(new RegExp('/api/v1/')).passThrough();
    })
    .config(function($provide) {
        $provide.decorator('$httpBackend', function($delegate) {
            var proxy = function(method, url, data, callback, headers) {
                var interceptor = function() {
                    var _this = this,
                        _arguments = arguments;
                    setTimeout(function() {
                        callback.apply(_this, _arguments);
                    }, 500); //500 milisec
                };
                return $delegate.call(this, method, url, data, interceptor, headers);
            };
            for(var key in $delegate) {
                proxy[key] = $delegate[key];
            }
            return proxy;
        });
    })
;