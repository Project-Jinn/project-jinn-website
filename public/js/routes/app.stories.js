var app = angular.module("app.stories", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/stories", {
    templateUrl: "/views/templates/stories.tpl.html",
    controller: "storiesCtrl"
  });
});

app.controller("storiesCtrl", function($scope, apiRequests) {
  $scope.stories = [
    {
      title: "Some test podcast",
      type: "podcast",
      desc: "This is a podcast on something",
      link: "http://soundcloud.com",
      author: "Joe",
      date: "2017-5-04"
    },
    {
      title: "Some test article",
      type: "article",
      desc: "This is a article on something",
      link: "https://medium.com/",
      author: "Ben",
      date: "2017-6-04"
    },
    {
      title: "Pictures of something",
      type: "other",
      desc: "This is pictures on something",
      link: "https://imgur.com",
      author: "Jacob",
      date: "2017-1-04"
    },
  ];
});
