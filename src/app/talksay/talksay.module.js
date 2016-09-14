import angular from angular;

import controller from './controller';
import service from './service';
import filter from './filter';
import directive from './directive';

export default angular
	.module('talksay', [])
	.service('TalkSayService', service)
	.directive('TalkSayDirective', directive)
	.controller('TalkSayController', controller)
	.filter('TalkSayFilter', filter)
	.component('TalkSayConponent1', component1);


