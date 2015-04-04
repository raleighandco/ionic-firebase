//IFFE, don't pollute the global namespace
(function)(){
  'use strict';

angular.module("Auth", ['ionic', 'firebase']);

angular.module('Auth')
  .factory('Auth', ['$scope', ''])
  .controller('Auth', ['$scope', '$firebase', function($scope, $firebase) {

  }]);
}());
