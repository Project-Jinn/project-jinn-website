var app = angular.module("app.medical", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/medical-cases", {
    templateUrl: "/views/templates/medical.tpl.html",
    controller: "medicalCtrl"
  });
});

app.controller("medicalCtrl", function($scope, apiRequests) {
  $scope.cases = [];
  $scope.loadCases = function() {
    apiRequests.getCases().then(function(response) {
      $scope.cases = response.data.data;
    }, function(error) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadCases();
      }, 500);
    });
  };
  $scope.excerpt = function(str) {
    var words = str.split(" ");
    if (words.length >= 50) {
      return words.slice(0, 50).join(" ")+"...";
    } else {
      return words.join(" ");
    }
  }
});

