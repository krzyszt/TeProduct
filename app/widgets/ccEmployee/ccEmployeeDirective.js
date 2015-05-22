(function(){
    'use strict)';

    angular.module('app').directive('ccEmployee', ['dataService',CCEmployee]);

    function CCEmployee (dataService) {
        return {
            templateUrl: 'app/widgets/ccEmployee/ccEmployee.tpl.html',
            link: function(scope,el,attr){
              dataService.getEmployee(scope.item.widgetSettings.employeeId)
                .then(function(data){
                  scope.selectedEmployee = data;
                })

            }
        }

    }

})();