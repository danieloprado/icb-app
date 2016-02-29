((angular, navigator) => {
  'use strict';

  angular.module('app')
    .controller('app.startCtrl', [
      '$scope',
      'Loader',
      StartCtrl
    ]);

  function StartCtrl($scope, Loader) {
    $scope.data = [];
  }

})(angular, navigator);