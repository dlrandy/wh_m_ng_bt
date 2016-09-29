 /*@ngInject*/
 export default class WeiboModel{
	constructor($http, transformRequestAsFormPostService){
		this.$http = $http;
		this.transformRequestAsFormPostService = transformRequestAsFormPostService;
 	}
 	getRecommendWeiboList(_obj) {
 		return this.$http.post('/api/weibo/GetGuestRecommendWeiboList',{
 			param1: _obj.cutpage ||1,
            param2: _obj.page|| 1,
            param3: _obj.type || 1,
            param4: _obj.total || 6
 		})
 	}
 	getGuestTalksayList(_obj = {}) {
 		return this.$http.post('/api/guest/ShuoshuoList',{
 			param1: _obj.cutpage ||1,
            page: _obj.page|| 1,
            param3: _obj.type || 1,
            param4: _obj.total || 6
 		})
 	}
 	getUserAllTalksayList(_obj = {}) {
 		return this.$http.post('/api/weibo/ShoushouList',{
 			param1: _obj.cutpage ||1,
            page: _obj.page|| 1,
            param3: _obj.type || 1,
            param4: _obj.total || 6
 		})
 	}
 	getUserAttTalksayList(_obj = {}) {
 		return this.$http({
 			method: 'post',
 			url: '/api/weibo/ShoushouTimeline',
 			transformRequest: this.transformRequestAsFormPostService.transform.bind(this.transformRequestAsFormPostService),
 			data:{
            	page: _obj.page|| 1,
 			}
 		})
 	}

 }