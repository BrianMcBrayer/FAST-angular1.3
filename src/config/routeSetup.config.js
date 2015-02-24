angular.module('app')
.config(['$routeProvider', 'routes', function($routeProvider, routes) {

  angular.forEach(routes, function (curRoute) {
    $routeProvider.when(curRoute.url, curRoute.config);
  });

}]);
