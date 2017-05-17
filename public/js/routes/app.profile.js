var app = angular.module("app.profile", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/profile/:id", {
    templateUrl: "/views/templates/profile.tpl.html",
    controller: "profileCtrl"
  });
});

app.controller("profileCtrl", function($scope, apiRequests, $routeParams) {
  console.log($routeParams.id);
  $scope.profile = {
    img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
    name: "Joe Shmoe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ex quis lorem dictum consequat vel a felis. Maecenas faucibus urna orci, non fringilla diam hendrerit eget. Fusce lacus erat, condimentum nec est ut, hendrerit mattis lacus. Pellentesque massa mi, eleifend et lacinia a, vehicula sit amet diam. Phasellus lacinia tellus a est elementum, ac porta lectus auctor. Curabitur fermentum urna ac ante malesuada consequat. Cras tristique eget augue at laoreet. Suspendisse eget ultricies massa, vel sodales nunc. Nullam congue, tortor at eleifend aliquam, elit tellus hendrerit turpis, eu tempus magna velit at eros. In iaculis odio sit amet ex commodo blandit. Maecenas tincidunt non nibh quis blandit. Nunc sit amet sem a nulla maximus tempor ac at felis. Donec tincidunt leo eget leo pretium, eget sollicitudin tortor ornare. Quisque at magna condimentum, elementum purus et, sagittis elit.",
    github: "https://github.com/JacobTheEvans",
    cv: "https://github.com/JacobTheEvans"
  };
});
