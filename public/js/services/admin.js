var app = angular.module("adminModule", ["settings"]);

app.service("adminRequests", function($http, web) {
  this.getNewUsers = function() {
    return $http.get(web.host + "admin/newusers/");
  };
  this.deleteNewUser = function(id) {
    return $http.delete(web.host + "admin/newusers/" + id);
  };
  this.addNewUser = function(id, data) {
    return $http.post(web.host + "admin/users/" + id, data);
  };
  this.getCurrentUsers = function() {
    return $http.get(web.host + "admin/users/");
  };
  this.deleteCurrentUser = function(id) {
    return $http.delete( web.host + "admin/user/" + id);
  };
  this.getCases = function() {
    return $http.get(web.host + "api/medical-cases");
  };
  this.addNewCase = function(data) {
    return $http.post(web.host + "admin/medical-cases", data);
  };
  this.updateCase = function(id, data) {
    var query = "?";
    for(key in data) {
      query += key + "=" + data[key] + "&";
    }
    return $http.put(web.host + "admin/medical-cases/" + id + query);
  }
  this.deleteCase = function(id) {
    return $http.delete(web.host + "admin/medical-cases/" + id);
  };
  this.getPros = function() {
    return $http.get(web.host + "api/developer-profiles");
  };
  this.addNewPro = function(data) {
    return $http.post(web.host + "admin/developer-profiles", data);
  };
  this.updatePro = function(id, data) {
    var query = "?";
    for(key in data) {
      query += key + "=" + data[key] + "&";
    }
    return $http.put(web.host + "admin/developer-profiles/" + id + query);
  }
  this.deletePro = function(id) {
    return $http.delete(web.host + "admin/developer-profiles/" + id);
  };
  this.getStories = function() {
    return $http.get(web.host + "api/stories");
  };
  this.addNewStory = function(data) {
    return $http.post(web.host + "admin/stories", data);
  };
  this.updateStory = function(id, data) {
    var query = "?";
    for(key in data) {
      query += key + "=" + data[key] + "&";
    }
    return $http.put(web.host + "admin/stories/" + id + query);
  }
  this.deleteStory = function(id) {
    return $http.delete(web.host + "admin/stories/" + id);
  };
});
