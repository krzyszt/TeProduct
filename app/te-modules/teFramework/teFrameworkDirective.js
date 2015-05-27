// teFrameworkDirective.js

(function () {
  "use strict";

  angular.module('teFramework')
    .directive('teFramework', teFramework);

  function teFramework() {
    return {
      transclude: true,
      scope: {
        title: '@',
        subtitle: '@',
        imagePath: '@'
      },
      controller: 'TeFramework',
      controllerAs: 'vm',
      templateUrl: 'app/te-modules/teFramework/teFramework.tpl.html'
    }
  }
})();
