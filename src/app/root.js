import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';


import 'wangeditor/dist/css/wangEditor.min.css';
import '../assets/scss/ie10-viewport-bug-workaround.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';

import '../assets/scss/main.scss';

import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUIRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';
import angularCookies from 'angular-cookies';
import routes from './route';
import app from './application/app.module';
import userModel from './application/models/userModel';
// import talksay from './talksay/talksay.module';
import loadingService from './application/services/LoadingService';


angular.module('main', [angularUIRouter, angularAnimate, angularCookies, ocLazyLoad, app])
    .config(routes)
    .service('loadingService', loadingService)
    // .service('userModel',userModel)
    .factory('loadingInterceptor', function (loadingService) {
        var loadingInterceptor = {
            request: function (config) {
                loadingService.setLoading(true);
                return config;
            },
            response: function (response) {
                loadingService.setLoading(false);
                return response;
            }
        };
        return loadingInterceptor;
    })
    .run(['$rootScope', 'loadingService', ($root, loadingService) => {
        $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
            if (newUrl !== oldUrl){
                    loadingService.setLoading(true);

            }
        });
        $root.$on('$stateChangeSuccess', () => {
                loadingService.setLoading(false);
        });
        $root.$on('$stateChangeError', () => {
            loadingService.setLoading(false);
        });

    }]);



