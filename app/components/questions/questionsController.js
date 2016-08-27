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
                console.log('quota' + $scope.quotaRemaining);
                // TODO: quota
                if ( $scope.quotaRemaining === undefined || $scope.quotaRemaining > 0 ) {
                    QuestionsApiService.getQuestions(currentPage).then(
                        function (response) {
                            console.log('GET QUESTIONS');
                            console.log(response);
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
                //return $scope.answers.hasOwnProperty(questionId) && $scope.answers[questionId].score > 0;
                //return $scope.answers.hasOwnProperty(questionId) && (
                //        $scope.answers[questionId].score > 0 ||
                //        $scope.answers[questionId].up_vote_count > 0 ||
                //        $scope.answers[questionId].down_vote_count > 0
                //    );
            };

            $scope.getDetail = function(questionId, hasAcceptedAnswer) {
                console.log('get detail');
                console.log('quota' + $scope.quotaRemaining);
                if ( hasAcceptedAnswer && $scope.quotaRemaining > 0 && (! $scope.answers.hasOwnProperty(questionId) || $scope.answers[questionId] == null) ) {
                    console.log('no answer so');
                    QuestionsApiService.getAnswer(questionId).then(
                        function(response) {
                            console.log('GET ANSWER');
                            console.log(response);
                            $scope.quotaRemaining = response.data.quota_remaining;

                            $scope.answers[questionId] = response.data.items[0];
                            console.log("question ID=" +questionId);
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