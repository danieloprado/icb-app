((angular) => {
  'use strict';

  angular.module('app.auth')
    .factory('auth', [
      '$localStorage',
      'jwtHelper',
      Auth
    ]);

  function Auth($localStorage, jwtHelper) {
    const isValidToken = token => {
      try {
        return token && !jwtHelper.isTokenExpired(token);
      } catch (err) {
        return false;
      }
    };

    const setToken = (token) => $localStorage.token = token;

    const getToken = () => $localStorage.token;

    const hasToken = () => isValidToken($localStorage.token);

    const getUser = () => {
      if (!hasToken()) return null;
      return jwtHelper.decodeToken(getToken());
    };

    return {
      setToken,
      getToken,
      hasToken,
      getUser
    };
  }

})(angular);