import angular from 'angular';

import AppController from './controllers/controller';//compoennt
import SignInAndUpController from './controllers/signInAndUp.controller';
import signInAndUp from './directives/signInAndUp.directive';
import userModel from './models/userModel';


export default angular.module('app', [])
	.controller('AppController', AppController)
	.controller('SignInAndUpController', SignInAndUpController)
	.directive('signinandup', () => new signInAndUp())
	.service('userModel',userModel)
	.name;