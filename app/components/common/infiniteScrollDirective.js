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
                    // Problem with this implementation: Getting the next batch of data is dependent on the window
                    // scroll event, so if for some reason the first batch of data fits into the window and scrolling
                    // isn't available, infinite scrolling won't work and the next result set won't be retrieved (TODO)

                    // The delay (wait time) before getting the next set of results after scrolling
                    // (for the purpose of throttling). In milli-seconds.
                    var delay = 1000;

                    // An offset so that the next result set will be loaded before reaching the end of the directive's
                    // element. In pixels.
                    var offset = 200;

                    const handler = scrollHandler();

                    function configure() {
                        angular.element($window)
                            // Just making sure that the event handler isn't already bound
                            .off('scroll', handler)
                            .on('scroll', handler);
                    }

                    function scrollHandler() {
                        var handlerLoadMore = function() {
                            var rect = element[0].getBoundingClientRect();

                            // Only concerned with vertical scrolling
                            if ( rect.bottom - offset <= ($window.innerHeight || angular.element(document.documentElement.clientHeight)) ) {
                                // Using event to notify controller to load next set of data, however this could also
                                // potentially have been handled differently, e.g. passing the function to call to the
                                // directive or using a parent directive that has access to the API call
                                //console.log('Fire Event');
                                scope.$emit('eventLoadMore');
                            }
                        };

                        var promise  = null;
                        var previous = 0;

                        return function() {
                            // Throttle calls to the event handler

                            // Using $interval instead of setInterval

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