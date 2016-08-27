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
                if ( $scope.quotaRemaining === undefined || $scope.quotaRemaining > 0 ) {
                    QuestionsApiService.getQuestions(currentPage).then(
                        function (response) {
                            //console.log('GET QUESTIONS');
                            //console.log(response);
                            $scope.quotaRemaining = response.data.quota_remaining;

                            var questions = response.data.items;

                            questions.forEach(function (element) {
                                // Convert dates (this could also have been done in the template with a custom filter)
                                element.last_activity_date = getDate(element.last_activity_date);
                                element.creation_date = getDate(element.creation_date);

                                $scope.questions.push(element);
                            });
                        },
                        function (response) {
                            console.log('GET QUESTIONS - ERROR');
                            console.log(response);
                        }
                    );
                }
            }

            $scope.questions = [];

            $scope.$on('eventLoadMore', function (event, data) {
                currentPage++;
                if ($scope.$$phase || $rootScope.$$phase) {
                    addQuestions();
                } else {
                    $scope.$apply(addQuestions());
                }
            });

            addQuestions();

            $scope.answers = {};

            $scope.hasDetails = function(acceptedAnswerId) {
                return $scope.answers.hasOwnProperty(acceptedAnswerId);
            };

            $scope.getDetail = function(acceptedAnswerId) {
                if ( acceptedAnswerId != null &&
                    $scope.quotaRemaining > 0 &&
                    (! $scope.answers.hasOwnProperty(acceptedAnswerId) || $scope.answers[acceptedAnswerId] == null)
                ) {
                    QuestionsApiService.getAnswer(acceptedAnswerId).then(
                        function(response) {
                            //console.log('GET ANSWER');
                            //console.log(response);
                            $scope.quotaRemaining = response.data.quota_remaining;

                            $scope.answers[acceptedAnswerId] = response.data.items[0];

                        },
                        function(response) {
                            console.log('GET ANSWER - ERROR');
                            console.log(response);
                        }
                    );
                }
            };

        }
    ]);

});