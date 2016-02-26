((angular) => {
  'use strict';

  angular.module('app')
    .factory('Loader', ['$rootScope', '$q', '_', '$ionicLoading', Loader]);

  function Loader($rootScope, $q, _, $ionicLoading) {
    const promises = [];
    const messages = [];

    const emitChange = () => {
      if (messages.length === 0) {
        $ionicLoading.hide();
      } else {
        const msg = '<ion-spinner icon="spiral"></ion-spinner><br/>' + messages.join("<br>");
        $ionicLoading.show({
          template: msg
        });
      }
    };

    return (msg, target) => {

      const promise = target;

      promises.push(promise);
      messages.push(msg);

      promise.finally(() => {
        const index = promises.indexOf(promise);
        promises.splice(index, 1);
        messages.splice(index, 1);

        emitChange();
      });

      emitChange();
      return promise;
    };
  }

})(angular);