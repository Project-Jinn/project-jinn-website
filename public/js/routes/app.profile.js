var app = angular.module("app.profile", ["apiModule", "ngRoute", "ui.bootstrap"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/profile/:id", {
    templateUrl: "/views/templates/profile.tpl.html",
    controller: "profileCtrl"
  });
});

app.service("modalData", function() {
  this.data = {};
  this.type = "";
  this.setData = function(newData) {
    this.data = newData;
  };
  this.setType = function(type) {
    this.type = type;
  };
});

app.controller("profileCtrl", function($scope, apiRequests, $routeParams, $modal, modalData, $log) {
  $scope.profile = {};
  $scope.loadProfile = function() {
    apiRequests.getProById($routeParams.id).then(function(response) {
      $scope.profile = response.data.data;
    }, function(error) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadProfile();
      }, 500);
    });
  }
  $scope.showModal = function(data) {
    modalData.setData(data);
    var modalInstance = $modal.open({
      templateUrl: "/views/templates/modals/contact.tpl.html",
      controller: ModalCtrl,
      scope: $scope,
      resolve: {
        item: $scope.selectedItemInModal
      }
    });
    modalInstance.result.then(function(selectedItem) {
      console.log("Share completed")
    }, function() {
      $log.info("Modal dismissed at: " + new Date());
    });
  };
});

var ModalCtrl = function($scope, $modalInstance, item, modalData) {
  $scope.form = modalData.data || {};
  $scope.submitForm = function() {
    $modalInstance.close('closed');
  };
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};

