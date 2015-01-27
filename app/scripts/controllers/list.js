'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('ListCtrl', function ($scope,Beer,notify) {
    $scope.beers = Beer.getBeers();

    $scope.getBeerColor = function(index) {
      return Beer.getBeerColor(index);
    };

    $scope.deleteBeer = function(index) {
      Beer.deleteBeer(index, function() {
        if(data === true) {
          notify('So saaad !');
        }
        else {
          notify('There were an error !');
        }
      });
    };
  });
