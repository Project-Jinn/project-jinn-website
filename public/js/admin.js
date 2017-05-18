var app = angular.module("app", ["ngRoute", "tokenModule", "app.signin", "app.signup", "app.manage"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/", {
    redirectTo: "/signin"
  }).otherwise({
    redirectTo: "/signin"
  });
});

app.service("AuthInterceptor", ["$q", "$location", "TokenService", function ($q, $location, TokenService) {
    this.request = function(config) {
        var token = TokenService.getToken();
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = "Bearer " + token;
        }
        return config;
    };

    this.responseError = function(response) {
        if (response.status === 401) {
            TokenService.removeToken();
            $location.path("/signin");
        }
        return $q.reject(response);
    };
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
