import  '../../../assets/scss/talksay/tmpl/template.scss';
export default class TalkSayController {
	constructor($scope, userModel,weiboModel, circleModel, 
		transformRequestAsFormPostService,$cookies, circleList, talksayList) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.signed = false;
		this.weiboModel = weiboModel;
		this.circleList = circleList;
		this.talksayListData = talksayList.List || [];
		this.talksayListPage = talksayList.Page || {};

		this.talksayListAttData = /*talksayAttList.List || */[];
		this.talksayListAttPage = /*talksayAttList.Page || */{};

		this.talksayListAttData = [];
		this.$scope.$on('userAuthenticated', () => {
        	this.signed = true;
        });
        this.$scope.$on('userNotAuthenticated', () => {
        	this.signed = false;
        });
	}
	getUserAttWeiboList(){
		let  pageAndList = this.weiboModel.getUserAttTalksayList().then(function (result) {
			return result.ResultData;
		});
		this.talksayListAttData = pageAndList.List || [];
		this.talksayListAttPage = pageAndList.Page || {};
	} 
}
TalkSayController.$inject = ['$scope','userModel', 'weiboModel',
 'circleModel', 'transformRequestAsFormPostService', '$cookies', 'circleList', 'talksayList'];