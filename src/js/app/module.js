(angular => {
  'use strict';

  angular.module('app', [
      'ionic',
      'ngCordova',
      'ngStorage'
    ])
    .constant('APP_NAME', 'ICB')
    .constant('VERSION', {
      number: '0.0.0',
      date: '29/02/2016'
    })
    .constant('API', 'https://localhost:3000/api/');

})(angular);