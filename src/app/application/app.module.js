import angular from 'angular';
 
import SignInAndUpController from './controllers/signInAndUp.controller';
import signInAndUp from './directives/signInAndUp.directive';
import Editor from './directives/editor.directive';
import userModel from './models/userModel';
import weiboModel from './models/weiboModel';
import circleModel from './models/circleModel';
import checkGuestService from './services/CheckGuestService';
import transformRequestAsFormPostService from './services/TransformRequestAsFormPostService';
import popleModule from '../shared/InterestedPeople/People.module';
import hotSpotModule from '../shared/HotSpot/HotSpot.module';


export default angular.module('app', [popleModule,hotSpotModule])
	.controller('SignInAndUpController', SignInAndUpController)
	.directive('signinandup', () => new signInAndUp())
	.directive('editor', () => new Editor())
	.service('transformRequestAsFormPostService', transformRequestAsFormPostService)
	.service('userModel',userModel)
	.service('weiboModel',weiboModel)
	.service('circleModel',circleModel)
	.service('checkGuestService',checkGuestService)
	.name;