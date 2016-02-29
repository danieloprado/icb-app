(angular => {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$localStorageProvider', Routes])
    .run(['$rootScope', '$localStorage', '$state', CheckRoute]);

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

  function CheckRoute($rootScope, $localStorage, $state) {
    console.log('church', $localStorage.church);

    $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
      if (_.isEmpty($localStorage.church) && toState.name != "app.begin") {
        event.preventDefault();
        $state.go('app.begin');
      }
    });
  }

})(angular);