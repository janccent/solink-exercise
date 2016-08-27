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

            // Questions

            // To keep track of current page as infinite scroll happens
            var currentPage = 1;

            function getDate(timestamp) {
                // Convert timestamp to date object (for Angular date filter on template)
                return new Date(timestamp * 1000)
            }

            function addQuestions() {
                // Normally would add some kind of message in the template to show the quota has been reached (TODO)
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

                                // Add new batch of questions to existing questions
                                $scope.questions.push(element);
                            });
                        },
                        function (response) {
                            // Normally some form of error handling would be added, e.g. an error message within the
                            // template (TODO)
                            console.log('GET QUESTIONS - ERROR');
                            console.log(response);
                        }
                    );
                }
            }

            // Keep track of questions to display
            $scope.questions = [];

            // Event emitted during infinite scroll
            $scope.$on('eventLoadMore', function (event, data) {
                currentPage++;
                // Handle cases where event is fired while digest cycle is still running
                if ($scope.$$phase || $rootScope.$$phase) {
                    addQuestions();
                } else {
                    $scope.$apply(addQuestions());
                }
            });

            addQuestions();

            // Answers

            $scope.answers = {};

            // Used to check if there is score data retrieved for an answer (which will display an extra section)
            $scope.hasDetails = function(acceptedAnswerId) {
                return $scope.answers.hasOwnProperty(acceptedAnswerId);
            };

            $scope.getDetail = function(acceptedAnswerId) {
                // Note checking $scope.quotaRemaining undefined here (since this should be populated by the questions
                // retrieval which is first encountered)
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
                            // Normally some form of error handling would be added, e.g. an error message within the
                            // template (TODO)
                            console.log('GET ANSWER - ERROR');
                            console.log(response);
                        }
                    );
                }
            };

        }
    ]);

});