'use strict';

angular.module('homeon')
  .controller('sensorCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/sensor";

    $scope.sensor = {};
    $scope.sensores = [];
    $scope.permissions = [];
    $scope.showAddEditSens = false;

    $scope.show = function(){
      $scope.showAddEditSens = true;
    };
    $scope.hide = function(){
      $scope.showAddEditSens = false;
      $scope.sensor = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.sensores = data;
      });
    });

    $scope.editSensor = function(sensor){
      $scope.sensor = angular.copy(sensor);
      $scope.show();
    };
    $scope.deleteSensor = function(sensor) {
    RestSrv.delete('http://localhost:8080/api/private/sensor', sensor, function() {
    $scope.sensores.splice($scope.sensor.indexOf(sensor), 1);
  //  ngNotify.set('User \'' + user.name + '\' deleted.', 'success');
});
};
    $scope.saveSensor = function(sensor){
      if(sensor.id){
        RestSrv.edit('http://localhost:8080/api/private/sensor', sensor, function() {
          delete sensor.password;

          for (var i = 0; i < $scope.sensores.length; i++) {
            if ($scope.sensores[i].id === sensor.id) {
              $scope.sensores[i] = sensor;
            }
          }

          $scope.hide();
        //  ngNotify.set('User \'' + user.name + '\' updated.', 'success');
        });


      }else {
        RestSrv.add('http://localhost:8080/api/private/sensor', sensor, function(newSensor){
          $scope.sensores.push(newSensor);
          $scope.hide();
        });
      }
    };
    RestSrv.find(permissionUrl, function(data) {
      $scope.permissions = data;

      RestSrv.find(url, function(data) {
        $scope.sensores = data;
      //  ngNotify.set('Loaded users with success.', 'success');
      });
    });
  });
