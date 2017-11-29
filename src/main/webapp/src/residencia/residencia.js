'use strict';

angular.module('homeon')
  .controller('rsdCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/fazenda";
    $scope.rsd = {};
    $scope.rsds = [];
    $scope.permissions = [];
    $scope.showAddEditRsd = false;

    $scope.show = function(){
      $scope.showAddEditRsd = true;
    };
    $scope.hide = function(){
      $scope.showAddEditRsd = false;
      $scope.rsd = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.rsds = data;
      });
    });
  //var userUrl = SERVICE_PATH.PRIVATE_PATH + '/user';
    $scope.editRsd = function(rsd){
      $scope.rsd = angular.copy(rsd);
      $scope.show();
    };
  $scope.deleteRsd = function(rsd) {
  RestSrv.delete('http://localhost:8080/api/private/fazenda', rsd, function() {
    $scope.rsds.splice($scope.rsds.indexOf(rsd), 1);
    //ngNotify.set('Package \'' + Rsd.name + '\' deleted.', 'success');
  });
};
$scope.saveRsd = function(rsd) {
      if (rsd.id) {
        RestSrv.edit('http://localhost:8080/api/private/fazenda', rsd, function() {
          delete rsd.password;

          for (var i = 0; i < $scope.rsds.length; i++) {
            if ($scope.rsds[i].id === rsd.id) {
              $scope.rsds[i] = rsd;
            }
          }

          $scope.hide();
      //    ngNotify.set('Rsd \'' + Rsd.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add('http://localhost:8080/api/private/fazenda', rsd, function(newRsd) {
          $scope.rsds.push(newRsd);
          $scope.hide();
        //  ngNotify.set('Rsd \'' + Rsd.name + '\' added.', 'success');
        });
      }
    };
    RestSrv.find(permissionUrl, function(data) {
      $scope.permissions = data;

      RestSrv.find(url, function(data) {
        $scope.rsds = data;
      //  ngNotify.set('Loaded users with success.', 'success');
      });
    });
  });
