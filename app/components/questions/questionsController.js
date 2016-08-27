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

            function getDate(timestamp) {
                return new Date(timestamp * 1000)
            }

            function addQuestions() {
                console.log('CURRENT PAGE=' + currentPage);
                QuestionsApiService.getQuestions(currentPage).then(
                    function(response) {
                        var questions = response.items;

                        questions.forEach( function(element) {
                            // Convert dates (this could also have been done in the template with a custom filter)
                            element.last_activity_date = getDate(element.last_activity_date);
                            element.creation_date = getDate(element.creation_date);

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

            $scope.answers = {};

            $scope.hasDetails = function(questionId) {
                return $scope.answers.hasOwnProperty(questionId);
            };

            $scope.getDetail = function(questionId) {
                console.log('get detail');
                if ( ! $scope.answers.hasOwnProperty(questionId) || $scope.answers[questionId] == null ) {
                    console.log('no answer so');
                    QuestionsApiService.getAnswer(questionId).then(
                        function(response) {
                            $scope.answers[questionId] = response.items[0];
                            console.log("question ID=" +questionId);
                        }
                    );
                }
            };

        }
    ]);

});