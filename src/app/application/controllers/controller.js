import footerIcon from '../../../assets/imgs/footer_icon_1.gif';
export default class AppController {
	constructor($scope, userModel, $cookies) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.footerIcon = footerIcon;
		this.signed = false;
		this.$scope.$on('userAuthenticated', () => {
        	this.signed = true;
        });
        this.$scope.$on('userNotAuthenticated', () => {
        	this.signed = false;
        });
		$cookies.get('guest')? this.signed= false: $cookies.get('token') ?this.signed= true:this.signed= false;
	}
}
AppController.$inject = ['$scope','userModel','$cookies'];