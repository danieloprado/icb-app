(angular => {
  'use strict';

  angular.module('app')
    .service('Sabesp', ['$http', Sabesp]);

  function Sabesp($http) {
    const endpoint = 'https://sabesp-api.herokuapp.com/v2';

    this.listAll = () => {
      return $http.get(endpoint).then((result) => result.data);
    };
  }

})(angular);