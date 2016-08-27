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
                response.data = {
                    "items": [
                        {
                            "tags": [
                                "c#",
                                "asp.net-core",
                                "reverse-proxy"
                            ],
                            "owner": {
                                "reputation": 22955,
                                "user_id": 132528,
                                "user_type": "registered",
                                "accept_rate": 98,
                                "profile_image": "https://www.gravatar.com/avatar/d8f540ed5300b2efbc389da170f9bf14?s=128&d=identicon&r=PG",
                                "display_name": "JasCav",
                                "link": "http://stackoverflow.com/users/132528/jascav"
                            },
                            "is_answered": false,
                            "view_count": 1,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151268,
                            "creation_date": 1472151268,
                            "question_id": 39152795,
                            "link": "http://stackoverflow.com/questions/39152795/asp-net-core-reverse-proxy-and-identityoptions-paths",
                            "title": "ASP.NET Core Reverse Proxy and IdentityOptions Paths"
                        },
                        {
                            "tags": [
                                "python",
                                "scrapy",
                                "web-crawler",
                                "distributed"
                            ],
                            "owner": {
                                "reputation": 1,
                                "user_id": 6599380,
                                "user_type": "registered",
                                "profile_image": "https://www.gravatar.com/avatar/372b0e1730b5452511b4829aba470251?s=128&d=identicon&r=PG&f=1",
                                "display_name": "bidai",
                                "link": "http://stackoverflow.com/users/6599380/bidai"
                            },
                            "is_answered": false,
                            "view_count": 22,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151265,
                            "creation_date": 1471922771,
                            "last_edit_date": 1472151265,
                            "question_id": 39091847,
                            "link": "http://stackoverflow.com/questions/39091847/scrapy-redis-re-crawl-the-url-that-one-machine-has-already-crawled",
                            "title": "scrapy-redis re-crawl the url that one machine has already crawled"
                        },
                        {
                            "tags": [
                                "tfs",
                                "tfsbuild",
                                "tfs2012"
                            ],
                            "owner": {
                                "reputation": 199,
                                "user_id": 1779039,
                                "user_type": "registered",
                                "accept_rate": 87,
                                "profile_image": "https://i.stack.imgur.com/uzFa1.jpg?s=128&g=1",
                                "display_name": "Ebeid Soliman El Sayed",
                                "link": "http://stackoverflow.com/users/1779039/ebeid-soliman-el-sayed"
                            },
                            "is_answered": false,
                            "view_count": 1,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151264,
                            "creation_date": 1472151264,
                            "question_id": 39152794,
                            "link": "http://stackoverflow.com/questions/39152794/tfs-build-does-not-complete-although-all-tasks-completed",
                            "title": "tfs build does not complete although all tasks completed"
                        },
                        {
                            "tags": [
                                "java",
                                "database",
                                "transactions",
                                "playframework-2.0",
                                "ebean"
                            ],
                            "owner": {
                                "reputation": 27,
                                "user_id": 3162899,
                                "user_type": "registered",
                                "accept_rate": 75,
                                "profile_image": "https://i.stack.imgur.com/Zs6gQ.jpg?s=128&g=1",
                                "display_name": "charbelfa",
                                "link": "http://stackoverflow.com/users/3162899/charbelfa"
                            },
                            "is_answered": false,
                            "view_count": 12,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151263,
                            "creation_date": 1472140717,
                            "last_edit_date": 1472151263,
                            "question_id": 39149863,
                            "link": "http://stackoverflow.com/questions/39149863/issue-when-updating-entries-in-database-using-play-and-ebeanserver",
                            "title": "Issue when updating entries in database using Play and EbeanServer"
                        },
                        {
                            "tags": [
                                "jquery",
                                "alert",
                                "nan"
                            ],
                            "owner": {
                                "reputation": 1,
                                "user_id": 6744911,
                                "user_type": "registered",
                                "profile_image": "https://www.gravatar.com/avatar/ca47bf15d6c0e2d60b5fc0f0b121bc64?s=128&d=identicon&r=PG&f=1",
                                "display_name": "Vedran Brendy",
                                "link": "http://stackoverflow.com/users/6744911/vedran-brendy"
                            },
                            "is_answered": false,
                            "view_count": 15,
                            "answer_count": 1,
                            "score": 0,
                            "last_activity_date": 1472151263,
                            "creation_date": 1472150821,
                            "last_edit_date": 1472151001,
                            "question_id": 39152666,
                            "link": "http://stackoverflow.com/questions/39152666/jquery-alert-returns-nan",
                            "title": "jquery alert returns NaN"
                        },
                        {
                            "tags": [
                                "ecmascript-6",
                                "babeljs"
                            ],
                            "owner": {
                                "reputation": 5859,
                                "user_id": 1523342,
                                "user_type": "registered",
                                "accept_rate": 100,
                                "profile_image": "https://www.gravatar.com/avatar/9d31b345f4d38c2a9a793522601d58e6?s=128&d=identicon&r=PG",
                                "display_name": "mthm",
                                "link": "http://stackoverflow.com/users/1523342/mthm"
                            },
                            "is_answered": false,
                            "view_count": 2,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151260,
                            "creation_date": 1472151260,
                            "question_id": 39152792,
                            "link": "http://stackoverflow.com/questions/39152792/duplicate-variable-names-in-switch-case",
                            "title": "Duplicate variable names in switch/case"
                        },
                        {
                            "tags": [
                                "java",
                                "arrays",
                                "class",
                                "methods",
                                "return"
                            ],
                            "owner": {
                                "reputation": 2,
                                "user_id": 6659505,
                                "user_type": "registered",
                                "profile_image": "https://graph.facebook.com/1045381178831447/picture?type=large",
                                "display_name": "Łukasz Krzyżak Franczyk",
                                "link": "http://stackoverflow.com/users/6659505/%c5%81ukasz-krzy%c5%bcak-franczyk"
                            },
                            "is_answered": true,
                            "view_count": 32,
                            "answer_count": 2,
                            "score": -2,
                            "last_activity_date": 1472151258,
                            "creation_date": 1472146277,
                            "last_edit_date": 1472147372,
                            "question_id": 39151426,
                            "link": "http://stackoverflow.com/questions/39151426/how-to-return-an-array-in-tostring-method",
                            "title": "How to return an array in .toString method"
                        },
                        {
                            "tags": [
                                "c++",
                                "qt",
                                "release"
                            ],
                            "owner": {
                                "reputation": 1,
                                "user_id": 5086196,
                                "user_type": "registered",
                                "profile_image": "https://www.gravatar.com/avatar/5edb2938168dd9f56f141792e8b11cfc?s=128&d=identicon&r=PG",
                                "display_name": "Hadenir",
                                "link": "http://stackoverflow.com/users/5086196/hadenir"
                            },
                            "is_answered": false,
                            "view_count": 2,
                            "answer_count": 0,
                            "score": 0,
                            "last_activity_date": 1472151254,
                            "creation_date": 1472151254,
                            "question_id": 39152791,
                            "link": "http://stackoverflow.com/questions/39152791/deploying-qt-application-didnt-find-entry-procedure",
                            "title": "Deploying Qt application - Didn&#39;t find entry procedure"
                        },
                        {
                            "tags": [
                                "knockout.js"
                            ],
                            "owner": {
                                "reputation": 3,
                                "user_id": 6756537,
                                "user_type": "registered",
                                "profile_image": "https://www.gravatar.com/avatar/0bd616e1d09101e8ea7065c715ef13d5?s=128&d=identicon&r=PG&f=1",
                                "display_name": "skety",
                                "link": "http://stackoverflow.com/users/6756537/skety"
                            },
                            "is_answered": true,
                            "view_count": 18,
                            "accepted_answer_id": 39148140,
                            "answer_count": 1,
                            "score": 0,
                            "last_activity_date": 1472151252,
                            "creation_date": 1472127686,
                            "question_id": 39145194,
                            "link": "http://stackoverflow.com/questions/39145194/knockout-nested-component-using-componenttemplatenodes-results-in-wrong-viewmod",
                            "title": "Knockout nested component using $componentTemplateNodes results in wrong viewModel"
                        },
                        {
                            "tags": [
                                "assembly",
                                "x86",
                                "cpu-registers"
                            ],
                            "owner": {
                                "reputation": 101624,
                                "user_id": 541686,
                                "user_type": "registered",
                                "accept_rate": 81,
                                "profile_image": "https://www.gravatar.com/avatar/615a28cc23e79497707f9ed17f96d92e?s=128&d=identicon&r=PG",
                                "display_name": "Mehrdad",
                                "link": "http://stackoverflow.com/users/541686/mehrdad"
                            },
                            "is_answered": true,
                            "view_count": 25521,
                            "accepted_answer_id": 10810340,
                            "answer_count": 2,
                            "score": 42,
                            "last_activity_date": 1472151252,
                            "creation_date": 1338353848,
                            "question_id": 10810203,
                            "link": "http://stackoverflow.com/questions/10810203/what-is-the-fs-gs-register-intended-for",
                            "title": "What is the &quot;FS&quot;/&quot;GS&quot; register intended for?"
                        }
                    ],
                    "has_more": true,
                    "quota_max": 300,
                    "quota_remaining": 284
                };

                //return response.items;
                return new Promise(function(resolve, reject) {
                    resolve(response);
                });
            };

        }
    ]);

});