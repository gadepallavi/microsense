'use strict';

// Declare app level module which depends on views, and components
angular.module('MicroSense', [
  'ngRoute',
  'MicroSense.view1',
    'MicroSense.services'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
