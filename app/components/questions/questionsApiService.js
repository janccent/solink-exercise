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

            this.getAnswer = function(questionId) {
                return $http({
                    url: 'https://api.stackexchange.com/2.2/answers/' + questionId,
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