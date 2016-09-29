import talksayTemplate from './talksay/tmpl/template.html';
import articleTemplate from './article/tmpl/template.html';
import settingTemplate from './setting/tmpl/template.html';
import infoTemplate from './info/tmpl/template.html';
import common3_1 from './layout/common3-1/index.html';
import common3_1Controller from './layout/common3-1/controllers/controller';
import applicationTemplate from './application/tmpl/template.html'
import applicationController from './application/controllers/controller';
import talksayController from './talksay/controllers/controller';

// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function routing(
    $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push('loadingInterceptor');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $urlRouterProvider.otherwise('/common');

    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            templateUrl: applicationTemplate,
            controller: applicationController,
            controllerAs: 'appCtrl',
            resolve: {
                guest: function(userModel) {
                    userModel.guestLogin();
                }
            }
        })
        //common part
        .state('app.common', {
            url: '/common',
            templateUrl: common3_1,
            controller: common3_1Controller,
            controllerAs: 'c3_1Ctrl',
            resolve: { 
                /*这里不加service 直接写的话，很坑不报错或者无限错误*/
                interestedPeople: (userModel, checkGuestService) => {
                    let guest = checkGuestService.ifGuest();
                    return guest ? userModel.getGuestInteretedPeople().then((result) => {
                            return result.data.List;
                        }) :
                        userModel.getUserInteretedPeople().then(function (result) {
                            return result.data.List;
                        });
                },
                recommandWeibo: (weiboModel) => {
                    return weiboModel.getRecommendWeiboList({}).then(function(result) {
                        return result.data;
                    });
                }
            }
        })
        .state('app.common.talksay', {
            url: '/talksay',
            templateUrl: talksayTemplate,
            controller: talksayController,
            controllerAs: 'talksayCtrl',
            resolve: {
                circleList: (circleModel) => {
                    return circleModel.getCircleList().then( (result) => {
                        return result.data.ResultData;
                    })
                },
                talksayList: (weiboModel,checkGuestService) => {
                    let guest = checkGuestService.ifGuest();
                    return guest ? weiboModel.getGuestTalksayList().then((result) => {
                            return result.data.ResultData;
                        }) :
                        weiboModel.getUserAllTalksayList().then(function (result) {
                            return result.data.ResultData;
                        });                
                }
            }
        })
        .state('app.common.article', {
            url: '/article',
            templateUrl: articleTemplate
        })
        //profile part 
        .state('app.profile', {
            url: '/profile',
            templateUrl: settingTemplate
        })
        //others part
        .state('app.others', {
            url: '/others',
            templateUrl: infoTemplate
        });
}
