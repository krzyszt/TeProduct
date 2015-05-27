// teFramework.module.js

(function(){


  angular.module('teFramework',[]);

})();

(function(){


    angular.module('teFramework').directive('teUserProfileSmall', TeUserProfileSmall);

    function TeUserProfileSmall () {
        return {
            templateUrl: 'app/te-modules/teFramework/teUserProfile/teUserProfileSmall.tpl.html'
        }
    }
})();

(function(){


    angular.module('teFramework').directive('teUserProfile', teUserProfile);

    function teUserProfile () {
        return {
            templateUrl: 'app/te-modules/teFramework/teUserProfile/teUserProfile.tpl.html'
        }
    }
})();

(function(){


  angular.module('teMenu',[]);

})();

angular.module("teMenu").run(["$templateCache", function($templateCache) {$templateCache.put("te-modules/teMenu/teMenu.tpl.html","<div>\n  <ul class=\"te-menu\" ng-transclude=\"\"></ul>\n  <a class=\"btn te-menu-layout-button\"\n     ng-class=\"{\'te-menu-button-horizontal\': !vm.isVertical}\"\n     ng-click=\"vm.toggleMenuOrientation()\"\n     ng-show=\"vm.allowHorizontalToggle\">\n\n    <i class=\"fa\"\n       ng-class=\"{\'fa-chevron-up\': vm.isVertical, \'fa-chevron-left\': !vm.isVertical}\"></i>\n  </a>\n</div>");
$templateCache.put("te-modules/teMenu/teMenuGroup.tpl.html","<li class=\"te-menu-item\" ng-click=\"clicked()\" ng-class=\"{\'te-menu-item-horizontal\': !isVertical()}\">\n  <div class=\"te-noselect\">\n    <i class=\"fa {{icon}} te-menu-icon\"></i>\n    {{ label }}\n    <i ng-if=\"isVertical()\" class=\"fa fa-chevron-left te-group-indicator-left\" ng-class=\"{\'fa-rotate-270\': isOpen}\"></i>\n  </div>\n</li>\n<div ng-show=\"isOpen\" class=\"te-submenu-section te-fade-in-animation\" ng-class=\"{\'te-menu-popup\': !isVertical()}\">\n  <ul ng-transclude=\"\"></ul>\n</div>");
$templateCache.put("te-modules/teMenu/teMenuItem.tpl.html","<li class=\"te-menu-item\" ng-class=\"{\'te-menu-item-horizontal\': !isVertical()}\">\n  <div class=\"te-noselect\">\n    <i class=\"fa {{icon}} te-menu-icon\"></i>\n    {{ label }}\n  </div>\n  <i ng-if=\"isActive() && isVertical()\" class=\"fa fa-2x fa-caret-left te-menu-active-indicator\"></i>\n</li>");}]);
(function () {


  angular.module('teMenu')
    .directive('teMenuItem', TeMenuItem);

  function TeMenuItem() {
    return {
      require: '^teMenu',
      scope: {
        label: '@',
        icon: '@',
        route: '@'
      },
      templateUrl: 'app/te-modules/teMenu/teMenuItem.tpl.html',
      link: function (scope, el, attr, ctrl) {

        scope.isActive = function(){
          return el === ctrl.activeElement;
        };

        scope.isVertical = function(){
          return ctrl.isVertical || el.parents('.te-submenu-section').length > 0;
        };

        el.on('click', function (evt) {
          evt.stopPropagation();
          evt.preventDefault();
          scope.$apply(function () {
              ctrl.setActiveItem(el);
              ctrl.setRoute(scope.route);
            }
          );
        })
      }
    }
  }
})();


(function(){


  angular.module('teMenu').directive('teMenuGroup', TeMenuGroupDirective);

  function TeMenuGroupDirective() {
    return {
      require: '^teMenu',
      transclude: true,
      scope: {
        label: '@',
        icon: '@'
      },
      templateUrl: 'app/te-modules/teMenu/teMenuGroup.tpl.html',
      link: function(scope, el, attr, ctrl){
        scope.isOpen = false;

        scope.closeMenu = function(){
          scope.isOpen = false;
        }


        scope.clicked = function(){
          scope.isOpen = !scope.isOpen;

          if (el.parents('.te-submenu-section').length == 0) {
            scope.setMenuPopupPosition();
          }

          ctrl.setOpenmenuScope(scope);
        }

        scope.isVertical = function(){
          return ctrl.isVertical || el.parents('.te-submenu-section').length > 0;
        }

        scope.setMenuPopupPosition = function () {
          var pos = el.offset();
          $('.te-submenu-section').css({'left': pos.left + 20, 'top': 36});
        };


      }
    }
  }

})();

(function () {


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

(function(){


  angular.module('teMenu').controller('TeMenu', ['$scope','$rootScope',TeMenu]);

  function TeMenu($scope, $rootScope){
    var vm = this;

    vm.showMenu = true;
    vm.isVertical = true;
    vm.allowHorizontalToggle = true;

    vm.setActiveItem = function(element){
      vm.activeElement = element;
    }

    vm.setRoute = function(route){
      $rootScope.$broadcast('te-menu-item-selected-event',{route: route});
    }

    $scope.$on('te-menu-show', function (evt, data) {
      vm.showMenu = data.show;
      vm.isVertical = data.isVertical;
      vm.allowHorizontalToggle = data.allowHorizontalToggle;
    });

    vm.toggleMenuOrientation = function(){

      if (vm.openMenuScope) {
        vm.openMenuScope.closeMenu();
      }
      vm.isVertical = !vm.isVertical;

      $rootScope.$broadcast('te-menu-orientation-changed-event', {
        isVertical: vm.isVertical
      });
    };

    vm.setOpenmenuScope = function(scope){
      vm.openMenuScope = scope;
    }

    angular.element(document).bind('click', function(e){
      if (vm.openMenuScope && !vm.isVertical) {
        if ($(e.target).parent().hasClass('te-menu-item')){
          return;
        }
        $scope.$apply(function(){
          vm.openMenuScope.closeMenu();
        })
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
})();

angular.module("teFramework").run(["$templateCache", function($templateCache) {$templateCache.put("te-modules/teFramework/teFramework.tpl.html","<div class=\"te-title-bar\">\n  <div class=\"row\">\n    <div class=\"te-logo-area col-sm-6\">\n      <img class=\"te-title-image\" ng-src=\"{{ imagePath }}\">\n\n      <div class=\"te-title-area\">\n        <p class=\"te-logo-title\">{{ title }}</p>\n\n        <p class=\"te-logo-subtitle\">{{ subtitle }}</p>\n      </div>\n\n      <div ng-if=\"vm.isMenuButtonVisible\" ng-click=\"vm.menuButtonClicked()\"\n           class=\"te-collapsed-menu pull-right\">\n        <button type=\"button\" class=\"btn te-nav-button\">\n          <i class=\"fa fa-bars\"></i>\n        </button>\n      </div>\n\n    </div>\n    <div class=\"te-right-side-controls col-sm-6\">\n        <te-user-profile-small></te-user-profile-small>\n    </div>\n  </div>\n</div>\n\n<div class=\"te-menu-area\"\n     ng-show=\"vm.isMenuVisible\"\n     ng-class=\"{\'te-menu-area-vertical\': vm.isMenuVertical, \'te-menu-area-horizontal\': !vm.isMenuVertical}\">\n  <te-user-profile></te-user-profile>\n  <div ng-transclude=\"\"></div>\n</div>\n\n\n<div ng-view=\"\" class=\"te-main-view\" ng-class=\"{\'te-main-view-full-width\': !vm.isMenuVertical || !vm.isMenuVisible}\">\n\n</div>");
$templateCache.put("te-modules/teFramework/teUserProfile/teUserProfile.tpl.html","<div class=\"te-user-profile\" ng-if=\"vm.isMenuVertical && !vm.isMenuButtonVisible\">\n  <img src=\"images/joe-doe.jpg\" alt=\"user image\"/>\n  <div>\n    <p>Joe</p>\n    <p>Doe</p>\n    <button class=\"btn btn-default btn-sm\">\n      <i class=\"fa fa-chevron-down\"></i>\n    </button>\n  </div>\n</div>");
$templateCache.put("te-modules/teFramework/teUserProfile/teUserProfileSmall.tpl.html","<div class=\"te-user-profile-small pull-right\">\n  <img src=\"images/joe-doe.jpg\" alt=\"user image\" />\n  <span>Joe Doe</span>\n  <button class=\"btn btn-default btn-sm\">\n    <i class=\"fa fa-chevron-down\"></i>\n  </button>\n</div>");}]);
// teFrameworkDirective.js

(function () {


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

// TeFrameworkController.js

(function () {


  angular.module('teFramework')
    .controller('TeFramework', ['$scope','$window','$timeout','$rootScope','$location',TeFramework]);

  function TeFramework($scope, $window, $timeout, $rootScope, $location) {
    var vm = this;

    vm.isMenuButtonVisible = false;
    vm.isMenuVisible = true;
    vm.isMenuVertical = true;

    $scope.$on('te-menu-item-selected-event', function(evt, data){
      vm.routeString = data.route;
      $location.path(data.route);
      checkWidth();
      broadcastMenuState();
    });

    $scope.$on('te-menu-orientation-changed-event', function(evt, data){
      vm.isMenuVertical = data.isVertical;
      $timeout(function(){
        $($window).trigger('resize.teFramework');
      },0)
    });

    $($window).on('resize.teFramework', function(){
      $scope.$apply(function(){
        checkWidth();
        broadcastMenuState();
      });
    });

    $scope.$on("$destroy", function () {
      $($window).off("resize.teFramework");
    });

    var checkWidth = function () {
      var width = Math.max($($window).width(), $($window).innerWidth());
      vm.isMenuVisible = (width > 768);
      vm.isMenuButtonVisible = !vm.isMenuVisible;
    };

    $timeout(function () {
      checkWidth();
      broadcastMenuState();
    }, 0);

    vm.menuButtonClicked = function(){
      vm.isMenuVisible = !vm.isMenuVisible;
      broadcastMenuState();
    }

    var broadcastMenuState = function () {
      $rootScope.$broadcast('te-menu-show',{
        show: vm.isMenuVisible,
        isVertical: vm.isMenuVertical,
        allowHorizontalToggle: !vm.isMenuButtonVisible
      })
    };
  }
})();
(function () {


  angular.module('teDashboard', []);

})();

angular.module("teDashboard").run(["$templateCache", function($templateCache) {$templateCache.put("te-modules/teDashboard/teDashboard.tpl.html","<div class=\"te-dashboard-header\">\n  {{ title }}\n\n  <div class=\"te-dashboard-controls\">\n    <div class=\"dropdown\">\n      <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\"\n              aria-expanded=\"true\">\n        <i class=\"fa fa-plus\"></i>\n        Add widget\n        <span class=\"caret\"></span>\n      </button>\n      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu1\">\n        <li ng-repeat=\"widget in widgetDefinitions\">\n          <a role=\"menuitem\" ng-click=\"addNewWidget(widget)\">{{ widget.title }}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<div gridster=\"gridsterOpts\">\n  <ul>\n    <li gridster-item=\"item\" ng-repeat=\"item in widgets\">\n\n      <!--<div class=\"te-widget-header\">-->\n      <!--<span>{{ item.title}}</span>-->\n      <!--<div class=\"te-widget-header-buttons\">-->\n      <!--<button class=\"btn btn-default pull-right\">-->\n      <!--<i class=\"fa fa-remove\"></i>-->\n      <!--</button>-->\n      <!--<button class=\"btn btn-default pull-right\">-->\n      <!--<i class=\"fa fa-gear\"></i>-->\n      <!--</button>-->\n      <!--</div>-->\n      <!--</div>-->\n\n      <!--<div class=\"te-widget-body\">-->\n      <!--</div>-->\n\n      <te-widget></te-widget>\n    </li>\n  </ul>\n</div>");
$templateCache.put("te-modules/teDashboard/teWidget.tpl.html","<div class=\"te-widget-body\">\n  <div class=\"te-widget-menu-area btn-group\">\n    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n      <i class=\"fa fa-bars\" ng-click=\"iconClicked()\"></i>\n    </a>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n        <li ng-click=\"close()\"> <i class=\"fa fa-2x fa-close\" ng-click=\"iconClicked()\"></i></li>\n        <li ng-click=\"settings()\"><i class=\"fa fa-2x fa-gear\" ng-click=\"iconClicked()\"></i></li>\n    </ul>\n  </div>\n</div>");}]);
(function(){


    angular.module('teDashboard').directive('teWidget', ['$compile','$modal',TeWidget]);

    function TeWidget ($compile, $modal) {
        return {
            templateUrl: 'app/te-modules/teDashboard/teWidget.tpl.html',
            link: function(scope,el,attr){
              var newElement = angular.element(scope.item.template);
              el.append(newElement);
              $compile(newElement)(scope);

              scope.close = function(){
                scope.widgets.splice(scope.widgets.indexOf(scope.item),1);
              }

              scope.settings = function(){
                var options = {
                  templateUrl: scope.item.widgetSettings.templateUrl,
                  controller: scope.item.widgetSettings.controller,
                  scope: scope,
                  size: 'sm'
                }
                $modal.open(options);
              }

              scope.iconClicked = function() {
                // empty body.
                // this function is used by ng-click in the template
                // so that icon clicks aren't intercepted by widgets
              }
            }
        }

    }

})();

(function(){


  angular.module('teDashboard').directive('teDashboard',TeDashboard)

  function TeDashboard() {
    return {
      templateUrl: 'app/te-modules/teDashboard/teDashboard.tpl.html',
      link: function(scope, el, attrs) {
        scope.addNewWidget = function(widget){
          var newWidget = angular.copy(widget.settings);
          scope.widgets.push(newWidget);
        }
      }
    }
  }
})();
