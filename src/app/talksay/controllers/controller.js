import  '../../../assets/scss/talksay/tmpl/template.scss';
export default class TalkSayController {
	constructor($sce, $scope, userModel,weiboModel, circleModel, 
		transformRequestAsFormPostService, checkGuestService, $cookies, circleList, talksayList) {
		this.name = 'RandyChen ';  
		this.$scope = $scope;
		this.signed = false;

		this.currentCircle=0;
		this.allTalkSay = true;

this.trustDangerousSni9ppet = function (data) {
	return $sce.trustAsHtml(data);
}
		this.checkGuestService = checkGuestService;
		this.weiboModel = weiboModel;
		this.circleList = circleList;
		this.talksayListData = talksayList.List || [];
		this.talksayListPage = talksayList.Page.Page || 1;

		this.talksayListAttData = /*talksayAttList.List || */[];
		this.talksayListAttPage = /*talksayAttList.Page || */1;

		this.$scope.$on('userAuthenticated', () => {
        	this.signed = true;
        });
        this.$scope.$on('userNotAuthenticated', () => {
        	this.signed = false;
        });

        /*可以在这里把所有的发给你发bind 到 this*/
        this.setListData = this.setListData.bind(this);
        this.setCurrentCircle = this.setCurrentCircle.bind(this);
        this.setCurrentTalksayType = this.setCurrentTalksayType.bind(this);
        this.getCurrentPageAndCircle = this.getCurrentPageAndCircle.bind(this);

	}
	getUserAttWeiboList(){
		let  pageAndList = this.weiboModel.getUserAttTalksayList().then(function (result) {
			return result.ResultData;
		});
		this.talksayListAttData = pageAndList.List || [];
		this.talksayListAttPage = pageAndList.Page.Page || {};
	} 
	getCurrentPageAndCircle(){
		let page = 1,
			circle = null;

		if (this.allTalkSay) {
			page = this.talksayListPage;

		} else {
			page = this.talksayListAttPage;
		}
		return {
			page: page,
			circle: this.currentCircle 
		}
	}
	setListData(pageAndList){
		console.log(pageAndList,'......................')
		if (this.allTalkSay) {
			this.talksayListData =  pageAndList.List || [];
		    this.talksayListPage =  pageAndList.Page.Page || 1;
		}else{
			this.talksayListAttData = pageAndList.List || [];
		    this.talksayListAttPage = pageAndList.Page.Page || 1;
		}
	}
	getCircleWeibo(){
		let  pageAndList = {};
		if( !this.checkGuestService.ifGuest()){
        pageAndList = this.weiboModel.getCircleWeibo(this.getCurrentPageAndCircle()).then((result) => {
			return result.data.ResultData;
			
		});
     	}else {
     	pageAndList = this.weiboModel.getGuestCircleWeibo(this.getCurrentPageAndCircle()).then((result) =>{
			return result.data.ResultData;
	 		
		});
		Promise.resolve(pageAndList).then((data) => {
			this.setListData(data);
		});
     	}
     	


     		


		
		console.log(pageAndList)
	}

	setCurrentCircle(circleId){
		this.talksayListPage = 1;
		if (circleId == this.currentCircle) {

		} else {
			this.currentCircle = circleId;
		}
		this.getCircleWeibo();
	}
	setCurrentTalksayType(tsType){
		if (tsType == 'all') {
			this.allTalkSay = true;
		}else {
			this.allTalkSay = false;
		}
	}
}
TalkSayController.$inject = ['$sce','$scope','userModel', 'weiboModel',
 'circleModel', 'transformRequestAsFormPostService','checkGuestService', '$cookies', 'circleList', 'talksayList'];