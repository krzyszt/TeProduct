(function(){
  "use strict";

  angular.module('app.core').directive('tewContacts', TewContacts);

  function TewContacts() {
    return {
      scope: {
      },
      template: '<h1>Contacts Page</h1>'
    }
  }
})();
