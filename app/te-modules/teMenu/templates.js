angular.module("teMenu").run(["$templateCache", function($templateCache) {$templateCache.put("te-modules/teMenu/teMenu.tpl.html","<div>\n  <ul class=\"te-menu\" ng-transclude=\"\"></ul>\n  <a class=\"btn te-menu-layout-button\"\n     ng-class=\"{\'te-menu-button-horizontal\': !vm.isVertical}\"\n     ng-click=\"vm.toggleMenuOrientation()\"\n     ng-show=\"vm.allowHorizontalToggle\">\n\n    <i class=\"fa\"\n       ng-class=\"{\'fa-chevron-up\': vm.isVertical, \'fa-chevron-left\': !vm.isVertical}\"></i>\n  </a>\n</div>");
$templateCache.put("te-modules/teMenu/teMenuGroup.tpl.html","<li class=\"te-menu-item\" ng-click=\"clicked()\" ng-class=\"{\'te-menu-item-horizontal\': !isVertical()}\">\n  <div class=\"te-noselect\">\n    <i class=\"fa {{icon}} te-menu-icon\"></i>\n    {{ label }}\n    <i ng-if=\"isVertical()\" class=\"fa fa-chevron-left te-group-indicator-left\" ng-class=\"{\'fa-rotate-270\': isOpen}\"></i>\n  </div>\n</li>\n<div ng-show=\"isOpen\" class=\"te-submenu-section te-fade-in-animation\" ng-class=\"{\'te-menu-popup\': !isVertical()}\">\n  <ul ng-transclude=\"\"></ul>\n</div>");
$templateCache.put("te-modules/teMenu/teMenuItem.tpl.html","<li class=\"te-menu-item\" ng-class=\"{\'te-menu-item-horizontal\': !isVertical()}\">\n  <div class=\"te-noselect\">\n    <i class=\"fa {{icon}} te-menu-icon\"></i>\n    {{ label }}\n  </div>\n  <i ng-if=\"isActive() && isVertical()\" class=\"fa fa-2x fa-caret-left te-menu-active-indicator\"></i>\n</li>");}]);