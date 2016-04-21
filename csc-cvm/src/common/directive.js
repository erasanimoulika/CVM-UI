angular.module('cvm.commonDirective', [])
    .directive('clockSvg', function () {
        return {
            restrict: 'E',
            scope: {degree: '='},
            template: '<svg class="clock" viewBox="0 0 100 100">' +
            '<circle class="face" cx="50" cy="50" r="45"/>' +
            '<g id="hands">' +
            '<rect class="hour" x="49" y="18" width="2" height="32" />' +
            '<rect class="min" x="49" y="10" width="2" height="40" />' +
            '</g>' +
            '<path class="arc" d="M49,0 A49,49 1 0,0 15,15" />' +
            '</svg>',
            replace: true,
            controller: function ($scope) {
                setInterval(function () {
                    function r(elClass, deg) {
                        var ele = document.getElementsByClassName(elClass);
                        angular.forEach(ele, function (value) {
                            value.setAttribute('transform', 'rotate(' + deg + ' 50 50)');
                        });
                    }

                    var d = new Date();
                    r('min', 6 * d.getMinutes());
                    r('hour', 30 * (d.getHours() % 12) + d.getMinutes() / 2);
                }, 1000);

                function updateProgress(secDegree) {
                    var arcEnd = polarToCartesian(50, 50, 49, -secDegree - 90);
                    var arc = document.getElementsByClassName('arc')[0];
                    var flag = secDegree > 180 ? 1 : 0;
                    var d = "M50,1 A49,49 0 " + flag + "," + 0 + " " + arcEnd[0] + "," + arcEnd[1];
                    arc.setAttribute("d", d);
                }

                $scope.$watch('degree', updateProgress);

                function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
                    var angleInRadians = angleInDegrees * Math.PI / -180.0;
                    var x = centerX + radius * Math.cos(angleInRadians);
                    var y = centerY + radius * Math.sin(angleInRadians);
                    return [x, y];
                }
            }
        };

    });
