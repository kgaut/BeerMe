'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('ListCtrl', function ($scope,Beer) {
    $scope.beers = Beer.getBeers();

    $scope.getBeerColor = function(index) {
      return Beer.getBeerColor(index);
    };
  });
