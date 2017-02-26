'use strict';

export default ($http) => {
  return {
    getExampleData() {
      return $http.get('/api/users/getAllUsers');
    }
  }
};