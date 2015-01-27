'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('AddCtrl', function ($scope,Beer,notify) {
    $scope.beerColors = Beer.getBeerColors();
    $scope.addBeer = function() {
      if(Beer.isBeer($scope.formBeer)) {
        Beer.addBeer($scope.formBeer,function(data) {
          if(data === true) {
            $scope.formBeer.name = '';
            $scope.formBeer.color = '';
            notify('Santééé !');
          }
          else {
            notify('Alret la bière est éventée, veuillez rafraichir la page, le développeur devait avoir trop bu.');
          }
        });
      }
      else {
      }
    };

  });
