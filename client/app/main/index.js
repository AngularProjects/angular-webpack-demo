'use strict';

import angular from 'angular';
import routes from './main.routes';
import MainController from './main.controller';
import MainService from './main.service';

export default angular.module('app.main', ['ui.router'])
  .config(routes)
  .controller('MainController', MainController)
  .service('MainService', MainService)
  .name;
