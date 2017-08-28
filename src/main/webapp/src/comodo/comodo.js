'use strict';

angular.module('homeon')
  .controller('SoloCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/solo";

    $scope.solo = {};
    $scope.solos = [];
    $scope.permissions = [];
    $scope.showAddEditSolo = false;

    $scope.show = function(){
      $scope.showAddEditSolo = true;
    };
    $scope.hide = function(){
      $scope.showAddEditSolo = false;
      $scope.solo = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.solos = data;
      });
    });

    $scope.editSolo = function(solo){
      $scope.solo = angular.copy(solo);
      $scope.show();
    };
    $scope.deleteSolo = function(solo) {
    RestSrv.delete('http://localhost:8080/api/private/solo', solo, function() {
    $scope.solos.splice($scope.solos.indexOf(solo), 1);
  //  ngNotify.set('User \'' + user.name + '\' deleted.', 'success');
});
};
$scope.saveSolo = function(solo) {
      if (solo.id) {
        RestSrv.edit(url, solo, function() {
          delete solo.password;

          for (var i = 0; i < $scope.solos.length; i++) {
            if ($scope.solos[i].id === solo.id) {
              $scope.solos[i] = solo;
            }
          }

          $scope.hide();
          //ngNotify.set('User \'' + solo.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add(url, solo, function(newSolo) {
          $scope.solos.push(newSolo);
          $scope.hide();
        //  ngNotify.set('User \'' + solo.name + '\' added.', 'success');
        });
      }
    };
    RestSrv.find(permissionUrl, function(data) {
      $scope.permissions = data;

      RestSrv.find(url, function(data) {
        $scope.solos = data;
      //  ngNotify.set('Loaded users with success.', 'success');
      });
    });
  });
