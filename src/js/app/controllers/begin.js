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
      'auth',
      'loginService',
      'lodash',
      'churchService',
      StartCtrl
    ]);

  function StartCtrl(
    $scope,
    $rootScope,
    $timeout,
    $state,
    $ionicHistory,
    $ionicModal,
    auth,
    loginService,
    _,
    churchService) {
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

    if (auth.hasToken()) {
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
        return loginService.loginChurch(churches[0]);
      }).then((token) => {
        auth.setToken(token);
        hide();
      });
    });



  }

})(angular, navigator);