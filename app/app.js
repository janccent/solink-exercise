'use strict';

define([
    'angularAMD',
    'angular-route'
], function(
    angularAMD
) {
    var app = angular.module('solinkCodingExercise', [
        'ngRoute'
    ]);

    // Configure routes
    app.config([
        '$routeProvider',
        '$locationProvider',
        function(
            $routeProvider,
            $locationProvider
        ) {
            $locationProvider.html5Mode(true);

            $routeProvider.when(
                '/',
                angularAMD.route({
                    controller:     'QuestionsController',
                    templateUrl:    'app/components/questions/questions.html'
                })
            );
        }
    ]);

    return angularAMD.bootstrap(app);
});