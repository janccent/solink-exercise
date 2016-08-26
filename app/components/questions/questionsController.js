'use strict';

define([
    'app'
], function (
    app
) {

    app.controller('QuestionsController', [
        '$scope',
        function(
            $scope
        ) {

            // TODO: temporary to test
            $scope.questions = ["questionA", "questionB", "questionC"];

        }
    ]);

});