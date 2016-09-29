/**
 * Created by xingjiabin on 9/17/16.
 */
export default class LoadingService {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
    }
    setLoading(loading) {
        console.log(this.$rootScope, this.$rootScope.loadingView,'loadingdfdfdfdfdfffffff')
        this.$rootScope.loadingView = loading;
    }
}