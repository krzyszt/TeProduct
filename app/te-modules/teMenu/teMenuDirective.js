(function () {
  "use strict";

  angular.module('teMenu')
    .directive('teMenu', ['$timeout',TeMenu]);

  function TeMenu($timeout) {
    return {
      transclude: true,
      scope: {
        
      },
      controller: 'TeMenu',
      controllerAs: 'vm',
      templateUrl: 'app/te-modules/teMenu/teMenu.tpl.html',
      link: function(scope, el, attr){
        var item = el.find('.te-menu-item:first');
        $timeout(function(){
          item.trigger('click');
        });
      }
    }
  }
})();
