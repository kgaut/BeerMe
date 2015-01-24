'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('AddCtrl', function ($scope,Beer) {
    $scope.beerColors = Beer.getBeerColors();
    $scope.addBeer = function() {
    };

  });
