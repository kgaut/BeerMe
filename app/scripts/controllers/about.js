'use strict';

/**
 * @ngdoc function
 * @name beermeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beermeApp
 */
angular.module('beermeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
