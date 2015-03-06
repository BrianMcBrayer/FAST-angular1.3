(function() {
  angular.module('config')
  .constant('routes', getRoutes());

  function getRoutes() {
    return [
      {
        url: '/',
        config: {
          templateUrl: 'views/home.tmpl.html'
        }
      },
      {
        url: '/multibind',
        config: {
          templateUrl: 'views/multibind/multibindHome.tmpl.html',
          controller: 'multibindController',
          controllerAs: 'vm'
        }
      },
      {
        url: '/multibind/multibind100',
        config: {
          templateUrl: 'views/multibind/multibind100.tmpl.html',
          controller: 'multibindController100',
          controllerAs: 'vm'
        }
      },
      {
        url: '/multibind/multibind1000',
        config: {
          templateUrl: 'views/multibind/multibind1000.tmpl.html',
          controller: 'multibindController1000',
          controllerAs: 'vm'
        }
      },
      {
        url: '/multibind/multibind5000',
        config: {
          templateUrl: 'views/multibind/multibind5000.tmpl.html',
          controller: 'multibindController5000',
          controllerAs: 'vm'
        }
      },
      {
        url: '/multibind/multibind10000',
        config: {
          templateUrl: 'views/multibind/multibind10000.tmpl.html',
          controller: 'multibindController10000',
          controllerAs: 'vm'
        }
      }
    ]
  }

})();
