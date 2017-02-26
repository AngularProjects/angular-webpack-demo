'use strict';

import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import main from './main';


import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './app.css';

angular.module('app', [ngCookies, ngResource, ngSanitize, uiRouter, uiBootstrap, main])
  .config(($urlRouterProvider, $locationProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
