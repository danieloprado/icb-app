((angular, navigator) => {
  'use strict';

  angular.module('app')
    .controller('app.beginCtrl', [
      '$scope',
      '$rootScope',
      '$timeout',
      '$state',
      '$ionicHistory',
      '$ionicModal',
      '$localStorage',
      'lodash',
      'churchService',
      StartCtrl
    ]);

  function StartCtrl($scope, $rootScope, $timeout, $state, $ionicHistory, $ionicModal, $localStorage, _, churchService) {
    let modal;

    const next = () => {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go("app.start");
    };

    const hide = () => {
      $scope.hide = true;
      next();


      $timeout(() => {
        modal.hide();
      }, 1000);
    };

    if (!_.isEmpty($localStorage.church)) {
      next();
      return;
    }

    $ionicModal.fromTemplateUrl('views/modal/begin.html', {
      scope: $scope,
      hardwareBackButtonClose: false,
      backdropClickToClose: false
    }).then((instance) => {
      modal = instance;
      modal.show();

      churchService.list().then((churches) => {
        $rootScope.church = $localStorage.church = churches[0];
        hide();
      });
    });



  }

})(angular, navigator);