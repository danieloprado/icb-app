((angular, lodash) => {
  'use strict';

  angular.module('app')
    .factory('lodash', () => _);

})(angular, _);