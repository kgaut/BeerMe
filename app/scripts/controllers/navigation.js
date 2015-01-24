'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('NavigationCtrl', function ($scope,$location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
  });
