import userIcon from '../../../assets/imgs/5.gif';
export default class Editor {
	constructor($scope,$location, userModel, $rootScope, $cookies,checkGuestService){
		this.signed = false;
		this.$location = $location;
		this.$scope = $scope;
		this.$rootScope = $rootScope;
		this.$cookies = $cookies;
		this.user = {
			phone: 1162700364,
			password: 123456
		};
		this.userModel = userModel;
		this.$scope.$on('userAuthenticated', () => {
        	this.signed = true;
        	this.getUserInfo();
        	$('#singnInModal .modal-footer .btn-default').click();
        });
        this.checkGuestService = checkGuestService;
        if( !this.checkGuestService.ifGuest()){
         this.signed= true;
         this.getUserInfo();
     	}
	}
	signIn() {
		
		this.userModel.signIn(this.user)
		.then((result) => {
			this.signed = true;
			this.$rootScope.$broadcast('userAuthenticated');
		});
	}
	signUp() {

	}
	signOut() {
		
	}

	getUserInfo() {
		this.userModel.getUserInfo()
			.then( (result) => {
				if (!result) {
					this.signed = false;
					this.$rootScope.$broadcast('userNotAuthenticated');
					return;
				}
			   console.log(result)
				this.user = result.data;
				this.user.avatar = result.data.FacePath ? result.data.FacePath + '_2.jpg' : userIcon;
			});
	}
}
Editor.$inject = ['$scope','$location','userModel','$rootScope','$cookies','checkGuestService'];