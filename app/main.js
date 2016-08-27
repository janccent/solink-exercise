'use strict';

require.config({
    base_url: 'app',
    paths: {
        app:    'app',

        QuestionsController:        'components/questions/questionsController',
        QuestionsApiService:        'components/questions/questionsApiDummyService',
        InfiniteScrollDirective:    'components/common/infiniteScrollDirective',

        'angularAMD':   [
            '//cdn.jsdelivr.net/angular.amd/0.2.1/angularAMD.min',
            '../node_modules/angular-amd/angularAMD.min'
        ],
        'angular':      [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min',
            '../node_modules/angular/angular.min'
        ],
        'angular-route':    [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route.min',
            '../node_modules/angular-route/angular-route.min'
        ],
        'angular-sanitize':    [
            '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize.min',
            '../node_modules/angular-sanitize/angular-sanitize.min'
        ]
    },
    shim: {
        'angularAMD':       ['angular'],
        'angular-route':    ['angular'],
        'angular-sanitize': ['angular'],
        'angular': {
            exports:    'angular'
        }
    },
    deps: [
        'app'
    ]
});