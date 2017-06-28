var app = angular.module("app.stories", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/stories", {
    templateUrl: "/views/templates/stories.tpl.html",
    controller: "storiesCtrl"
  });
});

app.controller("storiesCtrl", function($scope, apiRequests) {
  $scope.stories = [];
  $scope.loadStories = function() {
    apiRequests.getStories().then(function(response) {
      $scope.stories = response.data.data;
      $scope.stories= $scope.stories.map(function(item) {
        item.showDate = (new Date(item.date)).toLocaleDateString();
        return item;
      });
    }, function(error) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadStories();
      }, 500);
    });
  }
});

