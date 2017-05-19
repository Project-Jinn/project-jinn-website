var app = angular.module("app.case", ["apiModule", "ngRoute", "720kb.socialshare"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/case/:id", {
    templateUrl: "/views/templates/case.tpl.html",
    controller: "caseCtrl"
  });
});

app.controller("caseCtrl", function($scope, apiRequests, $routeParams) {
  $scope.case = {};
  $scope.loadCase = function() {
    apiRequests.getCaseById($routeParams.id).then(function(response) {
      $scope.case = response.data.data;
    }, function(error) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadCase();
      }, 500);
    });
  }
});
