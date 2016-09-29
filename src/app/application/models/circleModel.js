 /*@ngInject*/
 export default class CircleModel{
	constructor($http){
		this.$http = $http;

 	}

 	bei_yong(){
 		return this.$http.get('/api/users/logout');
 	}

 	getCircleList( ) {
 		return this.$http.post('/api/circle/circlelist', {
 			withCredentials : true
 		});
 	}

}
