'use strict';

export default ($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      template: require('./login/login.html'),
      controller: 'LoginController',
      controllerAs: '$ctrl'
    })
    .state('signup', {
      url: '/signup',
      template: require('./signup/signup.html'),
      controller: 'SignupController',
      controllerAs: '$ctrl'
    })
}
