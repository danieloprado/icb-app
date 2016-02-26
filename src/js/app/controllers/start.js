((angular, navigator) => {
  'use strict';

  angular.module('app')
    .controller('app.startCtrl', [
      '$scope',
      'Loader',
      'Sabesp',
      StartCtrl
    ]);

  function StartCtrl($scope, Loader, Sabesp) {

    $scope.data = [];

    Loader('Carregando dados da Sabesp', Sabesp.listAll()).then((data) => {
      $scope.data = data;
    });

  }

})(angular, navigator);