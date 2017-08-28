'use strict';

angular.module('homeon')
  .controller('userCtrl', function($scope, $http, RestSrv){
    var url ="http://localhost:8080/api/private/user";

    $scope.user = {};
    $scope.users = [];
    $scope.permissions = [];
    $scope.showAddEditUser = false;

    $scope.show = function(){
      $scope.showAddEditUser = true;
    };
    $scope.hide = function(){
      $scope.showAddEditUser = false;
      $scope.user = {};
    };

    var permissionUrl = 'http://localhost:8080/api/private/permission';

    RestSrv.find(permissionUrl, function(data){
      $scope.permissions = data;
      RestSrv.find(url, function(data){
        $scope.users = data;
      });
    });

    // Manage CRUD operations.
  //var userUrl = SERVICE_PATH.PRIVATE_PATH + '/user';

    $scope.editUser = function(user){
      $scope.user = angular.copy(user);
      $scope.show();
    };

      $scope.deleteUser = function(user) {
      RestSrv.delete('http://localhost:8080/api/private/user', user, function() {
      $scope.users.splice($scope.users.indexOf(user), 1);
    //  ngNotify.set('User \'' + user.name + '\' deleted.', 'success');
  });
};

$scope.saveUser = function(user) {
      if (user.id) {
        RestSrv.edit(url, user, function() {
          delete user.password;

          for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].id === user.id) {
              $scope.users[i] = user;
            }
          }

          $scope.hide();
          ngNotify.set('User \'' + user.name + '\' updated.', 'success');
        });
      } else {
        RestSrv.add(url, user, function(newUser) {
          $scope.users.push(newUser);
          $scope.hide();
          ngNotify.set('User \'' + user.name + '\' added.', 'success');
        });
      }
    };
    // Request all data (permission and user).
//var permissionUrl = SERVICE_PATH.PRIVATE_PATH + '/permission';

RestSrv.find(permissionUrl, function(data) {
  $scope.permissions = data;

  RestSrv.find(url, function(data) {
    $scope.users = data;
    ngNotify.set('Loaded users with success.', 'success');
  });
});
  });
