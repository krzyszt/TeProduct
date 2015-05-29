(function () {
  angular.module('app.core', [
    /*
     * Angular modules
     */
    'ngAnimate',
    'ngRoute',
    'ngStorage',
    'ngMockE2E',


    /*
     * 3rd Party modules
     */
    'gridster',
    'ui.bootstrap',
    'app.productResourceMock', // Faking web services - remove in production

    /*
     * External Modules including TeFramework, TeDashboard &TeMenu
     */
    'teFramework',
    'teDashboard',
    'teMenu'

  ])
})();
