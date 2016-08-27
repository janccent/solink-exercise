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

                ///2.2/answers/39148140;10810340?order=desc&sort=activity&site=stackoverflow&filter=!bGKnDXX4RGv5Cq

                //return $http.get(
                //    'https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow',
                //);

                //var response = {
                //    "items": [
                //    {
                //        "owner": {
                //            "reputation": 7768,
                //            "user_id": 392102,
                //            "user_type": "registered",
                //            "accept_rate": 60,
                //            "profile_image": "https://www.gravatar.com/avatar/66fd3058117f61eab0fe77a6565710ea?s=128&d=identicon&r=PG",
                //            "display_name": "Roy J",
                //            "link": "http://stackoverflow.com/users/392102/roy-j"
                //        },
                //        "up_vote_count": 0,
                //        "is_accepted": true,
                //        "score": 0,
                //        "last_activity_date": 1472151252,
                //        "last_edit_date": 1472151252,
                //        "creation_date": 1472135639,
                //        "answer_id": 39148140,
                //        "question_id": 39145194,
                //        "body": "<p>Your binding handler is being executed in the context of the <code>collapse-panel</code> component because that is what it is <em>inside</em>. The context of a tag applies inside it, and not to the tag itself (note, for example, how the <code>if</code> binding works - the tag is always there, but its contents may not be).</p>\n\n<p>If you want the <code>viewModel</code> binding to be executed in the context of <code>custom-component</code>, make that binding on a tag in the template for <code>custom-component</code>.</p>\n\n<p>If you want the parent to be able to set up a component's viewmodel, you should <a href=\"http://knockoutjs.com/documentation/component-binding.html\" rel=\"nofollow\">use <code>params</code></a>.</p>\n\n<blockquote>\n  <p><code>params</code> — an object that will be passed on to the component. Typically\n  this is a key-value object containing multiple parameters, and is\n  typically received by the component’s viewmodel constructor.</p>\n</blockquote>\n"
                //    }
                //],
                //    "has_more": false,
                //    "quota_max": 10000,
                //    "quota_remaining": 9977
                //};

                var response = {};
                response.data = {
                    "items":[
                        {
                            "owner":{
                                "reputation":65983,
                                "user_id":120163,
                                "user_type":"registered",
                                "accept_rate":58,
                                "profile_image":"https://i.stack.imgur.com/OPDmg.jpg?s=128&g=1",
                                "display_name":"Ira Baxter",
                                "link":"http://stackoverflow.com/users/120163/ira-baxter"
                            },
                            "comment_count":21,
                            "down_vote_count":8,
                            "up_vote_count":67,
                            "score":43,
                            "last_activity_date":1472239066,
                            "last_edit_date":1472239066,
                            "creation_date":1338354928,
                            "answer_id":10810340
                        },
                        {
                            "owner":{
                                "reputation":7768,
                                "user_id":392102,
                                "user_type":"registered",
                                "accept_rate":60,
                                "profile_image":"https://www.gravatar.com/avatar/66fd3058117f61eab0fe77a6565710ea?s=128&d=identicon&r=PG",
                                "display_name":"Roy J",
                                "link":"http://stackoverflow.com/users/392102/roy-j"
                            },
                            "comment_count":3,
                            "down_vote_count":0,
                            "up_vote_count":0,
                            "last_activity_date":1472151252,
                            "last_edit_date":1472151252,
                            "creation_date":1472135639,
                            "answer_id":39148140
                        }
                    ],
                    "has_more":false,
                    "quota_max":300,
                    "quota_remaining":273
                };

                return new Promise(function(resolve, reject) {
                    resolve(response);
                });
            };

            // TODO: WIP & not tested yet
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

                //return $http.get(
                //    '/2.2/questions?pagesize=20&order=desc&sort=activity&site=stackoverflow&filter=!L_Zm1pV5xYzJWAJtCSpkNX'
                //    'https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=activity&site=stackoverflow',
                //);
            };

        }
    ]);

});