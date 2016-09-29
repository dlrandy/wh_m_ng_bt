export default class Common3_1Controller {
	constructor($scope, userModel, weiboModel, $cookies, 
		interestedPeople, recommandWeibo) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		console.log(interestedPeople)
		this.interestedPeople = interestedPeople;
		this.recommandWeibo = recommandWeibo.List||[];
		console.log(this.recommandWeibo)
	
	}
	
}
Common3_1Controller.$inject = ['$scope','userModel', 'weiboModel','$cookies', 'interestedPeople','recommandWeibo'];