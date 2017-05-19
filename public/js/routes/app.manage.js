var app = angular.module("app.manage", ["ngRoute", "adminModule", "ui.bootstrap", "720kb.socialshare"]);

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
});

app.controller("manageCtrl", function($scope, adminRequests, $modal, $log, modalData) {
  var templates = {
    "case": "/views/templates/modals/case.tpl.html",
    "case-edit": "/views/templates/modals/case.tpl.html",
    "pro": "/views/templates/modals/dev.tpl.html",
    "pro-edit": "/views/templates/modals/dev.tpl.html",
    "stories": "/views/templates/modals/story.tpl.html",
    "stories-edit": "/views/templates/modals/story.tpl.html"
  };
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
        setTimeout(function() {
          $scope.loadCases();
        }, 2000);
      } else if (type == "case-edit") {
        setTimeout(function() {
          $scope.loadCases();
        }, 2000);
      } else if (type == "pro") {
        setTimeout(function() {
          $scope.loadPros();
        }, 2000);
      } else if (type == "pro-edit") {
        setTimeout(function() {
          $scope.loadPros();
        }, 2000);
      } else if (type == "stories") {
        setTimeout(function() {
          $scope.loadStories();
        }, 2000);
      } else if (type == "stories-edit") {
        setTimeout(function() {
          $scope.loadStories();
        }, 2000);
      } else {
        console.log("Case not found", type);
      }
    }, function() {
      $log.info("Modal dismissed at: " + new Date());
    });
  };
  $scope.showShare = function(data) {
    modalData.setData(data);
    var modalInstance = $modal.open({
      templateUrl: "/views/templates/modals/share.tpl.html",
      controller: ModalShareCtrl,
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
  $scope.section = "";
  $scope.newUsers = [];
  $scope.currentUsers = [];
  $scope.cases = [];
  $scope.pros = [];
  $scope.stories = [];
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
      if(response.status == 400) {
        setTimeout(function(){
          console.log("Err", response.status);
          $scope.loadNewUsers();
        }, 500);
      }
    });
  };
  $scope.loadCurrentUsers = function() {
    adminRequests.getCurrentUsers().then(function(response) {
      $scope.currentUsers = response.data;
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadCurrentUsers();
      }, 500);
    });
  };
  $scope.addNewUser = function(item) {
    adminRequests.addNewUser(item._id, item).then(function(response) {
      $scope.loadNewUsers();
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadNewUsers();
      }, 500);
    });
  };
  $scope.removeNewUser = function(item) {
    adminRequests.deleteNewUser(item._id).then(function(response) {
      $scope.loadNewUsers();
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadNewUsers();
      }, 500);
    });
  };
  $scope.removeCurrentUser = function(item) {
    adminRequests.deleteCurrentUser(item._id).then(function(response) {
      $scope.loadCurrentUsers();
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadCurrentUsers();
      }, 500);
    });
  };
  $scope.loadCases = function() {
    adminRequests.getCases().then(function(response) {
      $scope.cases = response.data.data;
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadCases();
      }, 500);
    });
  };
  $scope.removeCase = function(item) {
    adminRequests.deleteCase(item._id).then(function(response) {
      $scope.loadCases();
    }, function(response) {
      alert("Err", response.status);
    });
  };
  $scope.loadPros = function() {
    adminRequests.getPros().then(function(response) {
      $scope.pros = response.data.data;
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadPros();
      }, 500);
    });
  };
  $scope.removePro = function(item) {
    adminRequests.deletePro(item._id).then(function(response) {
      $scope.loadPros();
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadPros();
      }, 500);
    });
  };

  $scope.loadStories = function() {
    adminRequests.getStories().then(function(response) {
      $scope.stories = response.data.data;
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadStories();
      }, 500);
    });
  };
  $scope.removeStory = function(item) {
    adminRequests.deleteStory(item._id).then(function(response) {
      $scope.loadStories();
    }, function(response) {
      setTimeout(function(){
        console.log("Err", response.status);
        $scope.loadStories();
      }, 500);
    });
  };
});

var ModalInstanceCtrl = function($scope, $modalInstance, item, adminRequests, modalData) {
  $scope.form = modalData.data || {};
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
      adminRequests.addNewPro($scope.form).then(function() {
        alert("Profile added");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "pro-edit") {
      var data = {
        name: $scope.form.name,
        img: $scope.form.img,
        desc: $scope.form.desc,
        github: $scope.form.github,
        cv: $scope.form.cv,
        email: $scope.form.email
      }
      adminRequests.updatePro(modalData.data._id, data).then(function() {
        alert("Profile Updated");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "stories") {
      adminRequests.addNewStory($scope.form).then(function() {
        alert("Story added");
        $modalInstance.close('closed');
      }, function(err) {
        alert("Err in New Case", err.status);
      });
    } else if (modalData.type == "stories-edit") {
      var data = {
        title: $scope.form.title,
        desc: $scope.form.desc,
        type: $scope.form.type,
        link: $scope.form.link,
        author: $scope.form.author
      }
      adminRequests.updateStory(modalData.data._id, data).then(function() {
        alert("Story Updated");
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

var ModalShareCtrl = function($scope, $modalInstance, item, adminRequests, modalData) {
  $scope.form = modalData.data || {};
  $scope.submitForm = function() {
    $modalInstance.close('closed');
  };
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};
