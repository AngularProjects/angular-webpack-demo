import angular from 'angular';
import NavbarComponent from './navbar.component';

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;