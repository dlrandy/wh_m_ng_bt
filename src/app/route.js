import talksayTemplate from './talksay/tmpl/template.html';
import articleTemplate from './article/tmpl/template.html';
import settingTemplate from './setting/tmpl/template.html';
import infoTemplate from './info/tmpl/template.html';
import common3_1 from './layout/common3-1/index.html';
import applicationTemplate from './application/tmpl/template.html'
import applicationController from './application/controllers/controller';

// routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function routing (
	$stateProvider, $urlRouterProvider, $locationProvider) {
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
				guest: function(userModel){
					userModel.guestLogin();
				}
			}
		})
		//common part
		.state('app.common', {
			url: '/common',
			templateUrl: common3_1
		})
		.state('app.common.talksay', {
			url: '/talksay',
			templateUrl: talksayTemplate
		})
		.state('app.common.article', {
			url: '/article',
			templateUrl: articleTemplate
		})
		//profile part 
		.state('app.profile',{
			url: '/profile',
			templateUrl: settingTemplate
		})
		//others part
		.state('app.others', {
		    url: '/others',
		    templateUrl: infoTemplate
		})
		;
}