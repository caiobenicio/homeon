'use strict';

angular.module('homeon')
  .controller('dsptvCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/dsptv";

    $scope.dsptv = {};
    $scope.dsptvs = [];
    $scope.permissions = [];
    $scope.showAddEditDsptv = false;

    $scope.show = function(){
      $scope.showAddEditDsptv = true;
    };
    $scope.hide = function(){
      $scope.showAddEditDsptv = false;
      $scope.dsptv = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.dsptvs = data;
      });
    });

    $scope.editDsptv = function(dsptv){
      $scope.dsptv = angular.copy(dsptv);
      $scope.show();
    };
    $scope.deleteDsptv = function(dsptv) {
    RestSrv.delete('http://localhost:8080/api/private/dsptv', dsptv, function() {
    $scope.dsptvs.splice($scope.dsptvs.indexOf(dsptv), 1);
  //  ngNotify.set('User \'' + user.name + '\' deleted.', 'success');
});
};
$scope.saveDsptv = function(dsptv) {
      if (dsptv.id) {
        RestSrv.edit(url, dsptv, function() {
          delete dsptv.password;

          for (var i = 0; i < $scope.dsptvs.length; i++) {
            if ($scope.dsptvs[i].id === dsptv.id) {
              $scope.dsptvs[i] = dsptv;
            }
          }

          $scope.hide();
          //ngNotify.set('User \'' + dsptv.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add(url, dsptv, function(newDsptv) {
          $scope.dsptvs.push(newDsptv);
          $scope.hide();
        //  ngNotify.set('User \'' + dsptv.name + '\' added.', 'success');
        });
      }
    };
    RestSrv.find(permissionUrl, function(data) {
      $scope.permissions = data;

      RestSrv.find(url, function(data) {
        $scope.dsptvs = data;
      //  ngNotify.set('Loaded users with success.', 'success');
      });
    });
  });
