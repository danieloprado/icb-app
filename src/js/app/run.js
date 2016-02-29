(angular => {
  'use strict';

  angular.module('app')
    .run(['$rootScope', 'VERSION', 'APP_NAME', appNameVersion])
    .run(['$ionicPlatform', configKeyboard])
    .run(['$ionicPlatform', '$ionicHistory', '$rootScope', '$state', configBackButton]);

  function appNameVersion($rootScope, VERSION, APP_NAME) {
    $rootScope.VERSION = VERSION;
    $rootScope.APP_NAME = APP_NAME;
  }

  function configKeyboard($ionicPlatform) {
    $ionicPlatform.on("deviceready", () => {
      if (window.cordova && $window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.close();
        cordova.plugins.Keyboard.disableScroll(false);
      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

    });
  }

  function configBackButton($ionicPlatform, $ionicHistory, $rootScope, $state) {
    $ionicPlatform.registerBackButtonAction(event => {
      if ($ionicHistory.backView()) {
        $ionicHistory.goBack(-1);
      }
    }, 101);
  }

})(angular);