import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('app.signup', [])
  .controller('SignupController', SignupController)
  .name;