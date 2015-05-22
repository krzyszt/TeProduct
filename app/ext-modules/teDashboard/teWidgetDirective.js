(function(){
    'use strict)';

    angular.module('teDashboard').directive('teWidget', ['$compile',TeWidget]);

    function TeWidget ($compile) {
        return {
            templateUrl: 'app/ext-modules/teDashboard/teWidget.tpl.html',
            link: function(scope,el,attr){
              var newElement = angular.element(scope.item.template);
              el.append(newElement);
              $compile(newElement)(scope);

              scope.close = function(){
                scope.widgets.splice(scope.widgets.indexOf(scope.item),1);
              }
            }
        }

    }

})();
