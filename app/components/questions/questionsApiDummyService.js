'use strict';

define([
    'app'
], function (
    app
) {

    app.service('QuestionsApiService', [
        function(
        ) {

            this.getAnswer = function(questionId) {

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

            // TODO: Dummy call to get the questions (returning a promise) to get the other code in place first
            this.getQuestions = function() {
                var response = {};
                response.data =

                {
                    "items": [
                        {
                            "tags": [
                                "c++",
                                "c++11",
                                "c++14",
                                "raii",
                                "c++-faq"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472264497,
                            "creation_date": 1472263840,
                            "question_id": 39176805,
                            "title": "Using RAII to manage resources from a C-style API"
                        },
                        {
                            "tags": [
                                "python",
                                "loops"
                            ],
                            "accepted_answer_id": 39176845,
                            "answer_count": 1,
                            "last_activity_date": 1472264609,
                            "creation_date": 1472263291,
                            "question_id": 39176762,
                            "title": "Get average grade for 10 students - python"
                        },
                        {
                            "tags": [
                                "javascript",
                                "typescript"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472264172,
                            "creation_date": 1472263584,
                            "question_id": 39176786,
                            "title": "What is F-Bounded Polymorphism in TypeScript"
                        },
                        {
                            "tags": [
                                "java",
                                "newline"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472263901,
                            "creation_date": 1472263605,
                            "question_id": 39176787,
                            "title": "Is a java scanner&#39;s nextLine function guaranteed to delimit only on newline characters?"
                        },
                        {
                            "tags": [
                                "css"
                            ],
                            "accepted_answer_id": 39176851,
                            "answer_count": 1,
                            "last_activity_date": 1472264765,
                            "creation_date": 1472263273,
                            "question_id": 39176760,
                            "title": "How do i fix this broken CSS Masonry?"
                        },
                        {
                            "tags": [
                                "javascript",
                                "html",
                                "css",
                                "standards"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472265314,
                            "creation_date": 1472265314,
                            "question_id": 39176906,
                            "title": "Why no one uses header element"
                        },
                        {
                            "tags": [
                                "python",
                                "python-3.x",
                                "sorting"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472266107,
                            "creation_date": 1472265399,
                            "question_id": 39176918,
                            "title": "Python sorted two keys TWO orders"
                        },
                        {
                            "tags": [
                                "javascript",
                                "angularjs",
                                "asynchronous"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472264407,
                            "creation_date": 1472264407,
                            "question_id": 39176850,
                            "title": "Angular promise works intermittently"
                        },
                        {
                            "tags": [
                                "javascript",
                                "canvas",
                                "graphics"
                            ],
                            "accepted_answer_id": 39176940,
                            "answer_count": 1,
                            "last_activity_date": 1472265695,
                            "creation_date": 1472264702,
                            "question_id": 39176867,
                            "title": "Draw upper half of a string in Javascript"
                        },
                        {
                            "tags": [
                                "php"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472264889,
                            "creation_date": 1472264715,
                            "question_id": 39176869,
                            "title": "file copied using PHP has stale Date Created time stamp"
                        },
                        {
                            "tags": [
                                "php"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472265191,
                            "creation_date": 1472264815,
                            "question_id": 39176877,
                            "title": "How get column name in array?"
                        },
                        {
                            "tags": [
                                "sql",
                                "ruby-on-rails",
                                "ruby",
                                "ruby-on-rails-4",
                                "rails-activerecord"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472264391,
                            "creation_date": 1472263639,
                            "question_id": 39176788,
                            "title": "Rails 5, @child.parent, N+1 bullet"
                        },
                        {
                            "tags": [
                                "node.js",
                                "express",
                                "passport.js"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472265151,
                            "creation_date": 1472264370,
                            "question_id": 39176842,
                            "title": "Register with Node/Express and Passport"
                        },
                        {
                            "tags": [
                                "javascript",
                                "malware"
                            ],
                            "answer_count": 2,
                            "last_activity_date": 1472264310,
                            "creation_date": 1472258379,
                            "question_id": 39176380,
                            "title": "Trying to decode result of scam script"
                        },
                        {
                            "tags": [
                                "java",
                                "while-loop"
                            ],
                            "accepted_answer_id": 39176476,
                            "answer_count": 4,
                            "last_activity_date": 1472264373,
                            "creation_date": 1472258776,
                            "question_id": 39176422,
                            "title": "java while loop counting error"
                        },
                        {
                            "tags": [
                                "python",
                                "arrays",
                                "numpy",
                                "binary"
                            ],
                            "answer_count": 3,
                            "last_activity_date": 1472265480,
                            "creation_date": 1472257601,
                            "question_id": 39176308,
                            "title": "Python: convert numpy array of signs to int and back"
                        },
                        {
                            "tags": [
                                "c++",
                                "c"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472263307,
                            "creation_date": 1472262849,
                            "question_id": 39176732,
                            "title": "Why does ctime clock() give different times when called twice by same program for same operation?"
                        },
                        {
                            "tags": [
                                "c#",
                                "linq"
                            ],
                            "answer_count": 1,
                            "last_activity_date": 1472261737,
                            "creation_date": 1472259770,
                            "question_id": 39176511,
                            "title": "Linq: How to make an object from linq result"
                        },
                        {
                            "tags": [
                                "r"
                            ],
                            "accepted_answer_id": 39176652,
                            "answer_count": 1,
                            "last_activity_date": 1472263269,
                            "creation_date": 1472259311,
                            "question_id": 39176478,
                            "title": "split, export and read dataset in R"
                        },
                        {
                            "tags": [
                                "c++",
                                "c"
                            ],
                            "answer_count": 0,
                            "last_activity_date": 1472259924,
                            "creation_date": 1472259924,
                            "question_id": 39176527,
                            "title": "Permutating Numbers in c++"
                        }
                    ],
                    "has_more": true,
                    "quota_max": 10000,
                    "quota_remaining": 9951
                }

                ;

                //return response.items;
                return new Promise(function(resolve, reject) {
                    resolve(response);
                });
            };

        }
    ]);

});