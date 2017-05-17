var app = angular.module("app.profiles", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/developer-profiles", {
    templateUrl: "/views/templates/profiles.tpl.html",
    controller: "profilesCtrl"
  });
});

app.controller("profilesCtrl", function($scope, apiRequests) {
  $scope.profiles = [
    {
      img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
      name: "Joe Shmoe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ex quis lorem dictum consequat vel a felis. Maecenas faucibus urna orci, non fringilla diam hendrerit eget. Fusce lacus erat, condimentum nec est ut, hendrerit mattis lacus. Pellentesque massa mi, eleifend et lacinia a, vehicula sit amet diam. Phasellus lacinia tellus a est elementum, ac porta lectus auctor. Curabitur fermentum urna ac ante malesuada consequat. Cras tristique eget augue at laoreet. Suspendisse eget ultricies massa, vel sodales nunc. Nullam congue, tortor at eleifend aliquam, elit tellus hendrerit turpis, eu tempus magna velit at eros. In iaculis odio sit amet ex commodo blandit. Maecenas tincidunt non nibh quis blandit. Nunc sit amet sem a nulla maximus tempor ac at felis. Donec tincidunt leo eget leo pretium, eget sollicitudin tortor ornare. Quisque at magna condimentum, elementum purus et, sagittis elit.",
      github: "https://github.com/JacobTheEvans",
      cv: "https://github.com/JacobTheEvans",
      _id: "tesad1"
    },
    {
      img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
      name: "Joe Shmoe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ex quis lorem dictum consequat vel a felis. Maecenas faucibus urna orci, non fringilla diam hendrerit eget. Fusce lacus erat, condimentum nec est ut, hendrerit mattis lacus. Pellentesque massa mi, eleifend et lacinia a, vehicula sit amet diam. Phasellus lacinia tellus a est elementum, ac porta lectus auctor. Curabitur fermentum urna ac ante malesuada consequat. Cras tristique eget augue at laoreet. Suspendisse eget ultricies massa, vel sodales nunc. Nullam congue, tortor at eleifend aliquam, elit tellus hendrerit turpis, eu tempus magna velit at eros. In iaculis odio sit amet ex commodo blandit. Maecenas tincidunt non nibh quis blandit. Nunc sit amet sem a nulla maximus tempor ac at felis. Donec tincidunt leo eget leo pretium, eget sollicitudin tortor ornare. Quisque at magna condimentum, elementum purus et, sagittis elit.",
      github: "https://github.com/JacobTheEvans",
      cv: "https://github.com/JacobTheEvans",
      _id: "tesad1"
    },
    {
      img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
      name: "Joe Shmoe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ex quis lorem dictum consequat vel a felis. Maecenas faucibus urna orci, non fringilla diam hendrerit eget. Fusce lacus erat, condimentum nec est ut, hendrerit mattis lacus. Pellentesque massa mi, eleifend et lacinia a, vehicula sit amet diam. Phasellus lacinia tellus a est elementum, ac porta lectus auctor. Curabitur fermentum urna ac ante malesuada consequat. Cras tristique eget augue at laoreet. Suspendisse eget ultricies massa, vel sodales nunc. Nullam congue, tortor at eleifend aliquam, elit tellus hendrerit turpis, eu tempus magna velit at eros. In iaculis odio sit amet ex commodo blandit. Maecenas tincidunt non nibh quis blandit. Nunc sit amet sem a nulla maximus tempor ac at felis. Donec tincidunt leo eget leo pretium, eget sollicitudin tortor ornare. Quisque at magna condimentum, elementum purus et, sagittis elit.",
      github: "https://github.com/JacobTheEvans",
      cv: "https://github.com/JacobTheEvans",
      _id: "tesad1"
    },
    {
      img: "http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg",
      name: "Joe Shmoe",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non ex quis lorem dictum consequat vel a felis. Maecenas faucibus urna orci, non fringilla diam hendrerit eget. Fusce lacus erat, condimentum nec est ut, hendrerit mattis lacus. Pellentesque massa mi, eleifend et lacinia a, vehicula sit amet diam. Phasellus lacinia tellus a est elementum, ac porta lectus auctor. Curabitur fermentum urna ac ante malesuada consequat. Cras tristique eget augue at laoreet. Suspendisse eget ultricies massa, vel sodales nunc. Nullam congue, tortor at eleifend aliquam, elit tellus hendrerit turpis, eu tempus magna velit at eros. In iaculis odio sit amet ex commodo blandit. Maecenas tincidunt non nibh quis blandit. Nunc sit amet sem a nulla maximus tempor ac at felis. Donec tincidunt leo eget leo pretium, eget sollicitudin tortor ornare. Quisque at magna condimentum, elementum purus et, sagittis elit.",
      github: "https://github.com/JacobTheEvans",
      cv: "https://github.com/JacobTheEvans",
      _id: "tesad1"
    },
  ]
  $scope.excerpt = function(str) {
    var words = str.split(" ");
    if (words.length >= 50) {
      return words.slice(0, 50).join(" ")+"...";
    } else {
      return words.join(" ");
    }
  };
});
