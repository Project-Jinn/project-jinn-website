var app = angular.module("settings", []);

app.service("web", function() {
  this.host = "http://localhost:8080/";
});
