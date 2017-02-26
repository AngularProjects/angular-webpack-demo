'use strict';
/* eslint no-sync: 0 */
export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];

  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    // this.isLoggedIn = Auth.isLoggedInSync;
    // this.isAdmin = Auth.isAdminSync;
    // this.getCurrentUser = Auth.getCurrentUserSync;
  }
}


