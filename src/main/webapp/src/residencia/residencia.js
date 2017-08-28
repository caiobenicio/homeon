'use strict';

angular.module('homeon')
  .controller('FzdCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/fazenda";
    $scope.fzd = {};
    $scope.fzds = [];
    $scope.permissions = [];
    $scope.showAddEditFzd = false;

    $scope.show = function(){
      $scope.showAddEditFzd = true;
    };
    $scope.hide = function(){
      $scope.showAddEditFzd = false;
      $scope.fzd = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.fzds = data;
      });
    });
  //var userUrl = SERVICE_PATH.PRIVATE_PATH + '/user';
    $scope.editFzd = function(fzd){
      $scope.fzd = angular.copy(fzd);
      $scope.show();
    };
  $scope.deleteFzd = function(fzd) {
  RestSrv.delete('http://localhost:8080/api/private/fazenda', fzd, function() {
    $scope.fzds.splice($scope.fzds.indexOf(fzd), 1);
    //ngNotify.set('Package \'' + fzd.name + '\' deleted.', 'success');
  });
};
$scope.saveFzd = function(fzd) {
      if (fzd.id) {
        RestSrv.edit('http://localhost:8080/api/private/fazenda', fzd, function() {
          delete fzd.password;

          for (var i = 0; i < $scope.fzds.length; i++) {
            if ($scope.fzds[i].id === fzd.id) {
              $scope.fzds[i] = fzd;
            }
          }

          $scope.hide();
      //    ngNotify.set('fzd \'' + fzd.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add('http://localhost:8080/api/private/fazenda', fzd, function(newFzd) {
          $scope.fzds.push(newFzd);
          $scope.hide();
        //  ngNotify.set('fzd \'' + fzd.name + '\' added.', 'success');
        });
      }
    };
    RestSrv.find(permissionUrl, function(data) {
      $scope.permissions = data;

      RestSrv.find(url, function(data) {
        $scope.fzds = data;
      //  ngNotify.set('Loaded users with success.', 'success');
      });
    });
  });
