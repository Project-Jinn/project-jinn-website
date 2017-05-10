var app = angular.module("app.home", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/home", {
    templateUrl: "/views/home.tpl.html",
    controller: "homeCtrl"
  });
});

app.controller("homeCtrl", function($scope, apiRequests) {
});
