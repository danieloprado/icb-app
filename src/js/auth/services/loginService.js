((angular) => {
  'use strict';

  angular.module('app.auth')
    .factory('loginService', [
      'API',
      '$http',
      LoginService
    ]);

  function LoginService(API, $http) {
    let endpoints = {
      loginChurch: API + '/auth/login-church'
    };

    const loginChurch = (church) => {
      return $http.post(endpoints.loginChurch, {
        id: church._id
      }).then(response => response.data.token);
    };

    return {
      loginChurch
    };
  }

})(angular);