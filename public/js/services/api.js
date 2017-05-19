var app = angular.module("apiModule", ["settings"]);

app.service("apiRequests", function($http, web) {
  this.getCases = function() {
    return $http.get(web.host + "api/medical-cases");
  };
  this.getCaseById = function(id) {
    return $http.get(web.host + "api/medical-cases/" + id);
  };
  this.getPros = function() {
    return $http.get(web.host + "api/developer-profiles");
  };
  this.getProById = function(id) {
    return $http.get(web.host + "api/developer-profiles/" + id);
  };
  this.getStories = function() {
    return $http.get(web.host + "api/stories");
  };
});
