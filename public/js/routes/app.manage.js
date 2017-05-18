var app = angular.module("app.manage", ["ngRoute", "adminModule", "ui.bootstrap"]);

app.config(function($locationProvider, $routeProvider) {
  $routeProvider.when("/manage", {
    templateUrl: "/views/templates/manage.tpl.html",
    controller: "manageCtrl"
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
})

app.controller("manageCtrl", function($scope, adminRequests, $modal, $log, modalData) {
  var templates = {
    "case": "/views/templates/modals/case.tpl.html",
    "case-edit": "/views/templates/modals/case.tpl.html",
    "pro": "/views/templates/modals/dev.tpl.html",
    "pro-edit": "/views/templates/modals/dev.tpl.html"
  }
  $scope.showForm = function(type, item) {
    modalData.setData(item);
    modalData.setType(type);
    var modalInstance = $modal.open({
      templateUrl: templates[type],
      controller: ModalInstanceCtrl,
      scope: $scope,
      resolve: {
        item: $scope.selectedItemInModal
      }
    });
    modalInstance.result.then(function(selectedItem) {
      if (type == "case") {
        $scope.loadCases();
      } else if (type == "case-edit") {
        $scope.loadCases();
      } else if(type == "prop") {
      }else {
        console.log("Case not found", type);
      }
    }, function() {
      $log.info("Modal dismissed at: " + new Date());
    });
  };
  ///
  $scope.section = "";
  $scope.newUsers = [];
  $scope.currentUsers = [];
  $scope.cases = [];
  $scope.setSection = function(section) {
    $scope.section = section;
  };
  $scope.toggleAdminSelection = function(item) {
    item.isAdmin = !item.isAdmin;
  }
  $scope.loadNewUsers = function() {
    adminRequests.getNewUsers().then(function(response) {
      $scope.newUsers = response.data;
      $scope.newUsers = $scope.newUsers.map(function(item) {
        item.isAdmin = false;
        return item;
      });
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.loadCurrentUsers = function() {
    adminRequests.getCurrentUsers().then(function(response) {
      $scope.currentUsers = response.data;
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.addNewUser = function(item) {
    adminRequests.addNewUser(item._id, item).then(function(response) {
      $scope.loadNewUsers();
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.removeNewUser = function(item) {
    adminRequests.deleteNewUser(item._id).then(function(response) {
      $scope.loadNewUsers();
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.removeCurrentUser = function(item) {
    adminRequests.deleteCurrentUser(item._id).then(function(response) {
      $scope.loadCurrentUsers();
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.loadCases = function() {
    adminRequests.getCases().then(function(response) {
      $scope.cases = response.data.data;
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.removeCase = function(item) {
    adminRequests.deleteCase(item._id).then(function(response) {
      $scope.loadCases();
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.removePro = function(item) {
    adminRequests.deletePro(item._id).then(function(response) {
      $scope.loadCases();
    }, function(response) {
      alert("Err", response.status);
    });
  };
});

var ModalInstanceCtrl = function($scope, $modalInstance, item, adminRequests, modalData) {
  $scope.form = modalData.data || {} ;
  $scope.submitForm = function() {
    if (modalData.type == "case") {
      adminRequests.addNewCase($scope.form).then(function() {
        alert("Case added");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "case-edit") {
      var data = {
        title: $scope.form.title,
        desc: $scope.form.desc,
        img: $scope.form.img,
        url: $scope.form.url
      }
      adminRequests.updateCase(modalData.data._id, data).then(function() {
        alert("Case Updated");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "pro") {
      console.log($scope.form)
      adminRequests.addNewPro($scope.form).then(function() {
        alert("Case added");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "pro-edit") {
      var data = {
        name: $scope.form.title,
        img: $scope.form.img,
        desc: $scope.form.desc,
        github: $scope.form.github,
        cv: $scope.form.cv
      }
      adminRequests.updatePro(modalData.data._id, data).then(function() {
        alert("Case Updated");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    }
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};
