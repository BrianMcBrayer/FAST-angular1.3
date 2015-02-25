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
          controller: 'multibindController',
          controllerAs: 'vm'
        }
      },
      {
        url: '/multibind/multibind10000',
        config: {
          templateUrl: '/views/multibind/multibind10000.tmpl.html',
          controller: 'multibindController',
          controllerAs: 'vm'
        }
      }
    ]
  }

})();
