'use strict';

angular
  .module('parking.controllers', ['parking.services', 'leaflet-directive'])

  .controller('parkingController',['$scope', 'meters', 'glasgowcenter',
              function ($scope, meters, glasgowcenter) {
                  $scope.meters = {};
                  $scope.glasgowCenter = glasgowcenter;

                  this.dataRetrieve = function() {
                      meters.update().then(function(){
                          $scope.meters = meters.get();
                      });
                  };

                  this.dataRetrieve();

              }]);
