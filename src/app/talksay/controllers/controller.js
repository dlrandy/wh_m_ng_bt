import  '../../../assets/scss/talksay/tmpl/template.scss';
export default class TalkSayController {
	constructor($scope, userModel,weiboModel, circleModel, $cookies, circleList) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.signed = false;
		this.circleList = circleList;
		this.$scope.$on('userAuthenticated', () => {
        	this.signed = true;
        });
        this.$scope.$on('userNotAuthenticated', () => {
        	this.signed = false;
        });
	}
}
TalkSayController.$inject = ['$scope','userModel', 'weiboModel', 'circleModel', '$cookies', 'circleList'];