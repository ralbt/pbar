//= require angular
//= require angular-rails-templates
//= require angular-ui-router
//= require_tree .

app = angular.module('pBar', ['ui.router', 'templates']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
