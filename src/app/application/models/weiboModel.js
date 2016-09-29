 /*@ngInject*/
 export default class WeiboModel{
	constructor($http){
		this.$http = $http;

 	}
 	getRecommendWeiboList(_obj) {
 		return this.$http.post('/api/weibo/GetGuestRecommendWeiboList',{
 			param1: _obj.cutpage ||1,
            param2: _obj.page|| 1,
            param3: _obj.type || 1,
            param4: _obj.total || 6
 		})
 	}
 }