(function(){
    'use strict)';

    angular.module('teDashboard').directive('teWidget', ['$compile','$modal',TeWidget]);

    function TeWidget ($compile, $modal) {
        return {
            templateUrl: 'app/ext-modules/teDashboard/teWidget.tpl.html',
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
