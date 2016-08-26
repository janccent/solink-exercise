'use strict';

require.config({
    base_url: 'app',
    paths: {
        app:    'app',

        QuestionsController:    'components/questions/questionsController',

        'angularAMD':       '../node_modules/angular-amd/angularAMD.min',
        'angular':          '../node_modules/angular/angular.min',
        'angular-route':    '../node_modules/angular-route/angular-route.min'
    },
    shim: {
        'angularAMD':       ['angular'],
        'angular-route':    ['angular'],
        'angular': {
            exports:    'angular'
        }
    },
    deps: [
        'app'
    ]
});