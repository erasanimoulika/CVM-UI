angular.module('cvm.commonService', [])
    .service('commonService', function (Restangular, $q, $timeout) {
        function getPromise(data){
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(data);
            }, 0);

            return deferred.promise;
        }

        this.getCscIndiaLocations = function () {
            return getPromise(cscIndiaLocations);
        };

        this.getJourneyImages = function () {
            return getPromise(journeyImages);
        };

        this.hideHamburgerMenu = function() {
            $('.modal-backdrop').css('display', 'none');
            $('#menu-list').addClass('inner');
            $('.view-main-div').css('overflow', 'initial');
        };

        var cscIndiaLocations = [
            {
                cityName: "Noida",
                id: 7279746
            },
            {
                cityName: "Indore",
                id: 1269743
            },
            {
                cityName: "Vadodara",
                id: 1253573
            },
            {
                cityName: "Mumbai",
                id: 1275339
            },
            {
                cityName: "Hydrabad",
                id: 1176734
            },
            {
                cityName: "Bangalore",
                id: 1277333
            },
            {
                cityName: "Chennai",
                id: 1264527
            }];
        var journeyImages = [
            {
                year: 1998,
                line_slice: 'track-line.png',
                image1: '1-foundation.png',
                startedText1: "1500",
                startedText2: "EMPLOYEES",
                image2: 'profile-pic.png',
                titleText: "BPO, Product Development",
                title: "OFF SHORING"
            },
            {
                year: 2004,
                line_slice: 'track-line.png',
                image1: '2-off-shoring.png',
                startedText1: "7000",
                startedText2: "EMPLOYEES",
                image2: 'profile-pic.png',
                titleText: "PM, Architecture, Infra, SAP",
                title: "STRATEGIC FOCUS"
            },
            {
                year: 2006,
                line_slice: 'track-line.png',
                image1: '3-strategic-focus.png',
                startedText1: "14000",
                startedText2: "EMPLOYEES",
                image2: 'profile-pic.png',
                titleText: "Oracle, Testing, New Business",
                title: "SERVICE OWNERSHIP"
            },
            {
                year: 2010,
                line_slice: 'track-line.png',
                image1: '4-service-ownership.png',
                startedText1: "20355",
                startedText2: "EMPLOYEES",
                image2: 'profile-pic.png',
                titleText: "Mobility, Cloud, EI"
            }];
    });



