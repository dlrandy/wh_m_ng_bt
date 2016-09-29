export default class NgPeopleController {
	constructor($scope, userModel, $cookies) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.$scope.$on('userAuthenticated', () => {

        });
        this.$scope.$on('userNotAuthenticated', () => {

        });
	}
}
NgPeopleController.$inject = ['$scope','userModel','$cookies'];