 /*@ngInject*/
 export default class WeiboModel{
	constructor($http, transformRequestAsFormPostService){
		this.$http = $http;
            console.log(transformRequestAsFormPostService)
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
                  headers:{'Content-Type': 'application/x-www-form-urlencoded'},
 			transformRequest: this.transformRequestAsFormPostService.transform.bind(this.transformRequestAsFormPostService),
 			data:{
            	page: _obj.page|| 1,
 			}
 		})
 	}
      getCircleWeibo({page, circle} = {}) {
            console.log(page, circle,'dfdfdfdfdf')
            return this.$http({
                  method: 'post',
                  url: '/api/circle/CircleWeibo',
                  headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                  transformRequest: this.transformRequestAsFormPostService.transform.bind(this.transformRequestAsFormPostService),
                  data:{
                        param1: page.Page || 1,
                        param2: circle || null
                  }
            })
      }
      getGuestCircleWeibo({page, circle} = {}) {
            console.log(page, circle,'dfdfdfdfdf')
            return this.$http({
                  method: 'post',
                  url: '/api/guest/CircleWeibo',
                  headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                  transformRequest: this.transformRequestAsFormPostService.transform.bind(this.transformRequestAsFormPostService),
                  data:{
                        param1: page.Page || 1,
                        param2: circle || null
                  }
            })
      }

 }