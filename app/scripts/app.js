'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//IFFE to avoid polluting the global namespace
angular.module('ionicFirebaseApp', ['ionic', 'firebase']);

angular.module('ionicFirebaseApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home/home.html',
        controller: 'Home'
      })
      .state('auth', {
        url: '/auth',
        templateUrl: '/auth/authorization.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '/profile/profile.html'
      });
    $urlRouterProvider.otherwise('/home');
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
