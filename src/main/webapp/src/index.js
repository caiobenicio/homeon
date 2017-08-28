'use strict';

angular.module('homeon', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'src/home/home.html',
      controller: 'homeCtrl'
    })
    .when('/user', {
      templateUrl: 'src/user/user.html',
      controller: 'userCtrl'
    })
    .when('/login', {
      templateUrl: 'src/login/login.html',
      controller: 'loginCtrl'
    })
    .when('/residencia', {
      templateUrl: 'src/residencia/residencia.html',
      controller: 'rsdCtrl'
    })
    .when('/comodo', {
      templateUrl: 'src/comodo/comodo.html',
      controller: 'comodoCtrl'
    })
    .when('/sensor', {
      templateUrl: 'src/sensor/sensor.html',
      controller: 'sensorCtrl'
    })
    .when('/dispositivo', {
      templateUrl: 'src/dispositivos/dispositivos.html',
      controller: 'dsptvCtrl'
    })
    .when('/abrirChamado', {
      templateUrl: 'src/abrirChamado/abrirChamado.html',
      controller: 'chamadoCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
