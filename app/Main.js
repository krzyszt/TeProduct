(function(){
    'use strict)';

    angular.module('app').controller('Main', Main);

    function Main () {
        var vm = this;

        vm.state = 'unauthorized';
        vm.signIn = function(){
          vm.state = 'authorized';
        }
    }

})();
