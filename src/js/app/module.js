(angular => {
  'use strict';

  angular.module('app', [
      'ionic',
      'ngCordova',
      'ngStorage',
      'app.church',
      'app.auth'
    ])
    .constant('APP_NAME', 'ICB')
    .constant('VERSION', {
      number: '0.0.0',
      date: '29/02/2016'
    })
    .constant('API', 'http://192.168.1.19:3000/api/app');

})(angular);