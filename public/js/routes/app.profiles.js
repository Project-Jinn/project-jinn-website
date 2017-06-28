var app = angular.module("app.profiles", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/developer-profiles", {
    templateUrl: "/views/templates/profiles.tpl.html",
    controller: "profilesCtrl"
  });
});

app.controller("profilesCtrl", function($scope, apiRequests) {
  $scope.profiles = [];
  $scope.loadProfiles = function() {
    apiRequests.getPros().then(function(response) {
      $scope.profiles = response.data.data;
    }, function(error) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadProfiles();
      }, 500);
    });
  }
  $scope.excerpt = function(str) {
    var words = str.split(" ");
    if (words.length >= 50) {
      return words.slice(0, 50).join(" ") + "...";
    } else {
      return words.join(" ");
    }
  };
});

