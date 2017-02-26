'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './account.routes';
import login from './login';
import signup from './signup';

export default angular.module('app.account', [uiRouter, login, signup])
  .config(routing)
  .name;
