'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('ListCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
