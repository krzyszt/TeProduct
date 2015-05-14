// teFrameworkDirective.js

(function () {
  "use strict";

  angular.module('teFramework')
    .directive('teFramework', teFramework);

  function teFramework() {
    return {
      transclude: false,
      scope: {
        title: '@',
        subtitle: '@',
        imagePath: '@'
      },
      controller: 'TeFramework',
      controllerAs: 'vm',
      templateUrl: 'app/ext-modules/teFramework/teFramework.tpl.html'
    }
  }
})();
