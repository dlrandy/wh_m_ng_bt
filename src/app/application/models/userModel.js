 /*@ngInject*/
 export default class UserModel{
	constructor($http){
		this.$http = $http;

 	}
 	signIn(user){
 		return this.$http.post( '/api/Users/Login', {
            UserName: user.phone,
            Password: user.password,
            withCredentials : true
 		});
 	}
 	signUp(){

 	}
 	signOut(){
 		return this.$http.get('/api/users/logout');
 	}
 	getUserInfo() {
 		return this.$http.get('/api/Users/GetUserInfo', {withCredentials : true})
 	}

 	guestLogin(){
 		return this.$http.get('/api/guest/Login')
 	}
}
