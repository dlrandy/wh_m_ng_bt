import talksayTemplate from './talksay/tmpl/template.html';
import articleTemplate from './article/tmpl/template.html';
import settingTemplate from './setting/tmpl/template.html';
import infoTemplate from './info/tmpl/template.html';
import applicationTemplate from './application/tmpl/template.html'

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
			// template: applicationTemplate
			templateUrl: applicationTemplate,
			// controller: applicationController
			// controller: 'appCtrl'
			resolve: {
				// guest: userModel.guestLogin()
			}
		})
		//common part
		.state('app.common', {
			url: '/common',
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