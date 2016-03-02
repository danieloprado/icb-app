((angular) => {
  'use strict';

  angular.module('app.church')
    .factory('churchService', [
      'API',
      '$http',
      ChurchService
    ]);

  function ChurchService(API, $http) {
    let endpoints = {
      list: API + '/church/'
    };

    const list = () => $http.get(endpoints.list).then(response => response.data);

    return {
      list
    };
  }

})(angular);