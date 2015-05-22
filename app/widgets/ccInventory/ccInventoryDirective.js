(function(){
    'use strict)';

    angular.module('app').directive('ccInventory', ['dataService',CCInventory]);

    function CCInventory (dataService) {
        return {
            templateUrl: 'app/widgets/ccInventory/ccInventory.tpl.html',
            link: function(scope,el,attr){
              dataService.getLocation(scope.item.widgetSettings.id)
                .then(function(data){
                  scope.selectedLocation = data;
                });
            }
        }

    }

})();
