'use strict';

import angular from 'angular';
import routes from './main.routes';
import MainController from './main.controller';

export default angular.module('app.main', ['ui.router'])
  .config(routes)
  .controller('MainController', MainController)
  .name;
