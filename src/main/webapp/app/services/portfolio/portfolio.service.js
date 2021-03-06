(function () {
  'use strict';

  angular
    .module('easyMarginingApp')
    .factory('Portfolio', Portfolio);

  Portfolio.$inject = ['$resource'];

  function Portfolio ($resource) {
    return $resource('/esmeurexreferential/api/portfolios/owner/:owner', {owner: '@owner'}, {
        query: {method: 'GET',isArray: true },
        save: {method: 'POST', url: '/esmeurexreferential/api/portfolios/'}
    });
  }
})();
