import angular from 'angular';
import HotSpotController from './controllers/HotSpot.controller';
import HotSpotDirective from './directives/HotSpot.directive';
export default angular.module('HotSpot', [])
	.controller('hotSpotController',HotSpotController)
	.directive('nghotspot', () =>  new HotSpotDirective())
	.name;