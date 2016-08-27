'use strict';

define([
    'app',
    'QuestionsApiService',
    'InfiniteScrollDirective'
], function (
    app
) {

    app.controller('QuestionsController', [
        '$scope',
        '$rootScope',
        'QuestionsApiService',
        function(
            $scope,
            $rootScope,
            QuestionsApiService
        ) {

            var currentPage = 1;

            function addQuestions() {
                console.log('CURRENT PAGE=' + currentPage);
                QuestionsApiService.getQuestions(currentPage).then(
                    function(response) {
                        var questions = response.items;

                        questions.forEach( function(element) {
                            $scope.questions.push(element);
                        });
                    }
                );

            }

            $scope.questions = [];

            $scope.$on('eventLoadMore', function (event, data) {
                console.log('get next batch');
                currentPage++;
                if ($scope.$$phase || $rootScope.$$phase) {
                    addQuestions();
                } else {
                    $scope.$apply(addQuestions());
                }
                //addQuestions();
                //$scope.$apply();
            });

            addQuestions();

        }
    ]);

});