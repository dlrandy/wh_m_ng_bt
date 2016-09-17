import angular from 'angular';

import SignInAndUpController from './controllers/signInAndUp.controller';
import signInAndUp from './directives/signInAndUp.directive';
import userModel from './models/userModel';



export default angular.module('app', [])
	.controller('SignInAndUpController', SignInAndUpController)
	.directive('signinandup', () => new signInAndUp())
	.service('userModel',userModel)
	.name;