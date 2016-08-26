'use strict';

define([
    'app',
    'QuestionsApiService'
], function (
    app
) {

    app.controller('QuestionsController', [
        '$scope',
        'QuestionsApiService',
        function(
            $scope,
            QuestionsApiService
        ) {

            // TODO: temporary to test
            //$scope.questions = QuestionsApiService.getQuestions();
            QuestionsApiService.getQuestions().then(
                function(response) {
                    $scope.questions = response.items;
                }
            );

        }
    ]);

});