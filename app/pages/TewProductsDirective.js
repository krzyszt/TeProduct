(function(){
  "use strict";

  angular.module('app.core').directive('tewProducts', TewProducts);

  function TewProducts() {
    return {
      scope: {
      },
      template: '<h1>Products Page</h1>'
    }
  }
})();
