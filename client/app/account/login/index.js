import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('app.login', [])
  .controller('LoginController', LoginController)
  .name;