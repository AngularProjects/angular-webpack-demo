'use strict';

export default class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  isCollapsed = true;

  constructor() {
    'ngInject';
  }
}