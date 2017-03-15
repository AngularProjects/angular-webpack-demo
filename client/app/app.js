'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'bootstrap/dist/js/bootstrap';
import main from './main';
import navbar from './navbar';
import account from './account';

import './app.less';

angular.module('app', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, main, navbar, account])
  .config(($urlRouterProvider, $locationProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
