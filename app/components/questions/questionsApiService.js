'use strict';

define([
    'app'
], function (
    app
) {

    app.service('QuestionsApiService', [
        '$http',
        function(
            $http
        ) {

            // Note: Using AngularJS $http instead of XMLHttpRequest

            this.getAnswer = function(answerId) {
                // Filter includes: question_id, accepted_answer_id, title, tags, last_activity_date, creation_date,
                // answer_count
                return $http({
                    url: 'https://api.stackexchange.com/2.2/answers/' + answerId,
                    method: 'GET',
                    params: {
                        order: 'desc',
                        sort: 'activity',
                        site: 'stackoverflow',
                        filter: '!bGKnDXX4RGv5Cq'
                    }
                });
            };

            this.getQuestions = function(pageNumber) {
                // Filter includes: score, up_vote_count, down_vote_count, answer_id
                return $http({
                    url: 'https://api.stackexchange.com/2.2/questions',
                    method: 'GET',
                    params: {
                        page: pageNumber,
                        pagesize: 20,
                        order: 'desc',
                        sort: 'hot',
                        site: 'stackoverflow',
                        filter: '!L_Zm1pV5xYzJWAJtCSpkNX'
                    }
                });
            };

        }
    ]);

});