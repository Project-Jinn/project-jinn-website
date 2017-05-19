var app = angular.module("authModule", ["settings"]);

app.service("authSerivce", function($http, web) {
  this.signup = function(data) {
    return $http.post(web.host +  "signup", data);
  }
  this.signin = function(data) {
    return $http.post(web.host +  "auth/signin", data);
  }
});
