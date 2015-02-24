(function() {
  angular.module('config')
  .constant('routes', getRoutes());

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: '/views/home.tmpl.html'
        }
      },
      {
        url: '/multibind',
        config: {
          templateUrl: '/views/multibind/multibindHome.tmpl.html',
          controller: '/views/multibind/multibind.controller.js',
          controllerAs: 'vm'
        }
      }
    ]
  }

})();
