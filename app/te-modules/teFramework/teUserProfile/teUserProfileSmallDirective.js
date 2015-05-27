(function(){
    'use strict)';

    angular.module('teFramework').directive('teUserProfileSmall', TeUserProfileSmall);

    function TeUserProfileSmall () {
        return {
            templateUrl: 'app/te-modules/teFramework/teUserProfile/teUserProfileSmall.tpl.html'
        }
    }
})();
