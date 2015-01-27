'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('ListCtrl', function ($scope,Beer,notify,$location) {
    $scope.beers = Beer.getBeers();

    $scope.getBeerColor = function(index) {
      return Beer.getBeerColor(index);
    };

    $scope.deleteBeer = function(index) {
      Beer.deleteBeer(index, function(data) {
        if(data === true) {
          notify('So saaad !');
        }
        else {
          notify('There were an error !');
        }
        $location.path('#/list');
      });
    };
  });
