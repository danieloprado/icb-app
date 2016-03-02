(angular => {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$localStorageProvider', Routes])
    .run(['$rootScope', '$state', 'auth', CheckRoute]);

  function Routes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'views/side-menu.html',
        controller: 'app.menuCtrl'
      })
      .state('app.begin', {
        url: '/begin',
        views: {
          'menuContent': {
            templateUrl: 'views/blank.html',
            controller: 'app.beginCtrl'
          }
        }
      })
      .state('app.start', {
        url: '/start',
        views: {
          'menuContent': {
            templateUrl: 'views/start.html',
            controller: 'app.startCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/begin');
  }

  function CheckRoute($rootScope, $state, auth) {
    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
      if (!auth.hasToken() && toState.name != "app.begin") {
        event.preventDefault();
        $state.go('app.begin');
      }
    });
  }

})(angular);