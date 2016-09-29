import angular from 'angular';
import ngPeopleCtrl from './controllers/NgPeople.controller';
import NgPeopleDirect from './directives/NgPeople.directive';
export default angular.module('InterestedPeople', [])
	.controller('ngPeopleCtrl', ngPeopleCtrl)
	.directive('ngpeople', () => new NgPeopleDirect())
	.name;