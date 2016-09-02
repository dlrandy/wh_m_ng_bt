import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/main.scss';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';

import routes from './route';
import app from './app.module';

// import shared from './shared/shared.module';
// import feature from 'fearture';

angular.module('main', [app]);


angular.element(document).ready(() => {
	angular.bootstrap(document, ['main']);
});





















