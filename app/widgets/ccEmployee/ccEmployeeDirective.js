(function(){
    'use strict)';

    angular.module('app').directive('ccEmployee', ['dataService',CCEmployee]);

    function CCEmployee (dataService) {
        return {
            templateUrl: 'app/widgets/ccEmployee/ccEmployee.tpl.html',
            link: function(scope,el,attr){
              scope.selectedEmployee = null;
              dataService.getEmployee(scope.item.widgetSettings.id)
                .then(function(data){
                  scope.selectedEmployee = data;
                })

            }
        }

    }

})();
