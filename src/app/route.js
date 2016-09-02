// import talksayTemplate from './talksay/template.html';
// import applicationTemplate from './application/template.html'

export default function ($stateProvider, $urlRouteProvider, $locationProvider) {
	// 'ngInject';
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
	$urlRouteProvider.otherwise('/');

	$stateProvider
		.state('app', {
			url: '',
			abstract: true,
			template: '<app-component></app-component>'
			// templateUrl: applicationTemplate,
			// controller: applicationController
		})
		// .state('app.talksay', {
		// 	url: '/',
		// 	templateUrl: talksayTemplate,
		// 	controller: talksayController
		// });
}