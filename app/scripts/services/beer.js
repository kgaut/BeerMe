'use strict';

/**
 * @ngdoc service
 * @name beermeApp.Beer
 * @description
 * # Beer
 * Service in the beermeApp.
 */
angular.module('beermeApp')
  .service('Beer', function () {
    var beers = [
      {bid : 1, name : 'Grimbergen', color: 1 },
      {bid : 2, name : 'Saint Thomas', color: 1 }
    ];

    var beerColors = [
      {cid : 1,name : 'Blonde',machineName : 'blonde'},
      {cid : 2,name : 'Ambrée',machineName : 'ambree'},
      {cid : 3,name : 'Brune',machineName : 'brune'},
      {cid : 4,name : 'Blanche',machineName : 'blanche'},
      {cid : 5,name : 'Dunkel',machineName : 'dunkel'},
    ];
    var getBeerColors = function() {
      return beerColors;
    };
    var getBeerColor = function(index) {
      return beerColors[index];
    };
    var getBeers = function() {
      return beers;
    };
    var addBeer = function(beer) {
      beers.push(beer);
    }

    return {
      getBeerColors: getBeerColors,
      getBeerColor: getBeerColor,
      getBeers: getBeers,
      addBeer: addBeer
    };
  });
