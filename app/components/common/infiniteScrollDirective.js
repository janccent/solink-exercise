'use strict';

define([
    'app'
], function(
    app
) {

    app.directive('infiniteScroll', [
        '$interval',
        '$window',
        function(
            $interval,
            $window
        ) {
            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attributes, controller) {
                    // The delay (wait time) before getting the next set of results after scrolling
                    // (for the purpose of throttling). In milli-seconds.
                    var delay = 1000;
                    var offset = 200;

                    const handler = scrollHandler();

                    function configure() {
                        angular.element($window)
                            // TODO
                            .off('scroll', handler)
                            .on('scroll', handler);
                    }

                    function scrollHandler() {
                        var handlerLoadMore = function() {
                            var rect = element[0].getBoundingClientRect();

                            // Only concerned with vertical scrolling
                            if ( rect.bottom - offset <= ($window.innerHeight || angular.element(document.documentElement.clientHeight)) ) {
                                //console.log('Fire Event');
                                scope.$emit('eventLoadMore');
                            }
                        };

                        var promise  = null;
                        var previous = 0;

                        return function() {
                            var now = new Date().getTime();
                            var remainingTime = delay - (now - previous);

                            if ( remainingTime <= 0 ) {
                                $interval.cancel(promise);
                                promise = null;
                                previous = now;
                                handlerLoadMore();
                            } else if (! promise ) {
                                promise = $interval(
                                    function() {
                                        previous = new Date().getTime();
                                        $interval.cancel(promise);
                                        promise = null;
                                        return handlerLoadMore();
                                    },
                                    remainingTime,
                                    1
                                );
                            }
                        };
                    }

                    configure();
                }
            };
        }
    ]);

});