((angular, navigator) => {
  'use strict';

  angular.module('app')
    .controller('app.menuCtrl', [
      '$scope',
      MenuCtrl
    ]);

  function MenuCtrl($scope) {

    $scope.exit = () => {
      if (navigator) {
        navigator.app.exitApp();
      }
    };

  }

})(angular, navigator);