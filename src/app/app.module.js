import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';
import angularStrap from 'angular-strap';

import routes from './route';
import AppController from './application/controller';//compoennt
import AppTemplate from './application/template.html';

// import shared from './shared/shared.module';
// import feature from 'fearture';


export default angular.module('app', [
	angularStrap,
	angularUIRouter,
	angularAnimate
	])
	.config(routes)
	.component('appComponent', {controller: AppController, template: AppTemplate})
	.name;