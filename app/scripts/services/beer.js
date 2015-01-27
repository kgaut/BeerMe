'use strict';

/**
 * @ngdoc service
 * @name beermeApp.Beer
 * @description
 * # Beer
 * Service in the beermeApp.
 */
angular.module('beermeApp')
  .service('Beer', function (localStorageService) {
    var beers = localStorageService.get('beers');

    var saveBeers = function() {
      localStorageService.set('beers', beers);
    };

    if(beers === undefined) {
      beers = [];
      saveBeers();
    }

    var beerColors = [
      {cid : 1,name : 'Blonde',machineName : 'blonde'},
      {cid : 2,name : 'Ambrée',machineName : 'ambree'},
      {cid : 3,name : 'Brune',machineName : 'brune'},
      {cid : 4,name : 'Blanche',machineName : 'blanche'},
      {cid : 5,name : 'Dunkel',machineName : 'dunkel'},
    ];

    var isBeer = function (beer) {
      return beer.name !== undefined &&
              beer.name.trim() !=='' &&
              beer.color !== undefined &&
              !isNaN(beer.color) &&
              getBeerColor(beer.color) !== undefined;

    };

    var getBeerColors = function() {
      return beerColors;
    };

    var getBeerColor = function(index) {
      return beerColors[index];
    };

    var getBeers = function() {
      return beers;
    };

    var addBeer = function(beerToAdd,callback) {
      var l = beers.length;
      var newBeer = {};
      if(beerToAdd.bid === undefined) {
        newBeer.bid = l+1;
      }
      else {
        newBeer.bid = beerToAdd.bid;
      }
      newBeer.color = parseInt(beerToAdd.color);
      newBeer.name = beerToAdd.name.trim();

      beers.push(newBeer);
      saveBeers();
      callback((l+1) === beers.length);
    };

    var deleteBeer = function(index,callback) {
      var l = beers.length;
      if(beers[index] !== undefined) {
        beers.splice(index,1);
      }
      saveBeers();
      callback((l-1) === beers.length);
    };

    return {
      getBeerColors: getBeerColors,
      getBeerColor: getBeerColor,
      getBeers: getBeers,
      deleteBeer: deleteBeer,
      saveBeers: saveBeers,
      addBeer: addBeer,
      isBeer: isBeer
    };
  });
