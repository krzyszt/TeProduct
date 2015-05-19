(function () {
  "use strict";

  angular.module('app.core').config(['$routeProvider', RouteConfig]);

  function RouteConfig($routeProvider) {
    var routes = [
      {
        url: '/dashboard',
        config: {
          template: '<tew-dashboard></tew-dashboard>'
        }

      },
      {
        url: '/contacts',
        config: {
          template: '<tew-contacts></tew-contacts>'
        }
      },
      {
        url: '/products',
        config: {
          template: '<tew-products></tew-products>'
        }
      }
    ];

    routes.forEach(function (route) {
      $routeProvider.when(route.url, route.config);
    })

    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }

})();