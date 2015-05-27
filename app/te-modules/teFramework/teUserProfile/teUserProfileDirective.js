(function(){
    'use strict)';

    angular.module('teFramework').directive('teUserProfile', teUserProfile);

    function teUserProfile () {
        return {
            templateUrl: 'app/te-modules/teFramework/teUserProfile/teUserProfile.tpl.html'
        }
    }
})();
