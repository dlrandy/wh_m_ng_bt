 export default class HotSpotController {
	constructor($scope, userModel, $cookies,$window) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.$scope.$on('userAuthenticated', () => {

        });
        this.$scope.$on('userNotAuthenticated', () => {
 
        });
        this.$window = $window;
	}
}
HotSpotController.$inject = ['$scope','userModel','$cookies','$window'];