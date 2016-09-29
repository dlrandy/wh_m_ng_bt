export default class CheckGuestService {
    constructor($rootScope, $cookies) {
        this.$rootScope = $rootScope;
        this.$cookies = $cookies;
    }
    ifGuest(){
    	return this.$cookies.get('guest')? true: this.$cookies.get('token') ?false:true;
    }
}