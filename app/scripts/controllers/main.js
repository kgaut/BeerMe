'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
