((angular, ionic) => {
  'use strict';

  angular.module('app')
    .config(['$ionicConfigProvider', configIonic])
    .config(['$compileProvider', urlSanitize]);

  function configIonic($ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);

    if (ionic.Platform.isWindowsPhone()) {
      $ionicConfigProvider.views.transition('none');
    }
  }

  function urlSanitize($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|ms-appx-web|x-wmapp0):/);
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|ms-appx-web|x-wmapp0):|data:image\//);
  }

})(angular, ionic);