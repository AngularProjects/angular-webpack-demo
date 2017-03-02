'use strict';

export default ($stateProvider) => {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    template: require('./main.html'),
    controller: 'MainController',
    controllerAs: 'main'
  });
};
