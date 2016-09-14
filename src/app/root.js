import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
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
import angularCookies from 'angular-cookies';
import routes from './route';
import app from './application/app.module';
// import talksay from './talksay/talksay.module';



angular.module('main', [angularUIRouter, angularAnimate, angularCookies, app])
    .config(routes)
    .run(['$rootScope', ($root) => {
        $root.$on('$stateChangeStart', (e, newUrl, oldUrl) => {
            if (newUrl !== oldUrl) {
                $root.loadingView = true;
            }
        });
        $root.$on('$stateChangeSuccess', () => {
            $root.loadingView = false;
        });
        $root.$on('$stateChangeError', () => {
            $root.loadingView = false;
        });

    }]);



