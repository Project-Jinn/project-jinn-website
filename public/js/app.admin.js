var app = angular.module("app.admin", ["ngRoute", "adminModule"]);

app.config(function($locationProvider, $routeProvider) {
  $routeProvider.when("/admin", {
    templateUrl: "/views/admin.tpl.html",
    controller: "adminCtrl"
  });
});

app.controller("adminCtrl", function($scope, adminRequests) {
});
