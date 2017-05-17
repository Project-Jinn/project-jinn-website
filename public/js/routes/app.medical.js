var app = angular.module("app.medical", ["apiModule", "ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider.when("/medical-cases", {
    templateUrl: "/views/templates/medical.tpl.html",
    controller: "medicalCtrl"
  });
});

app.controller("medicalCtrl", function($scope, apiRequests) {
  $scope.cases = [
    {
      title: "Help Hisham get Eye Surgery",
      img: "https://d2g8igdw686xgo.cloudfront.net/20263486_1494346840.984.jpg",
      desc: `Hisham is a sweet Syrian boy whose family fled their home country. They now live in a tent in the Rahma refugee camp in the Beqaa valley in Lebanon.
      I am currently working in Lebanon as a coding instructor. Recently, I visited Rahma with a few friends. We met Hisham's family there. They pleaded for us to help them.
      Hisham’s father explained that during the war, there was some kind of shock that hit Hisham, they are not exactly sure when. It caused his eyes to become crossed. Now he sees double of everything. I am sure this plays into why Hisham shyly looked toward the ground as we approached and greeted him and kept his distance from the crowds of children playing rambunctiously.
      Hisham's father told us they had a doctor look at his situation before and were told it could be fixed by an operation. This operation would cost $2,500. A hefty sum for those trying to recover from fleeing their country. We told his father that we would do what we could. And here we are, making good on our offer to help by asking you to help.
      There has been so much grief and pain for this family and others who have fled the war in Syria. Fixing this boy's vision can change his life and repair at least that part of it.
      There is a vast, vast ocean of need for Syrian refugee families. It may seem like it makes only a tiny difference in ocean of need to help this boy, but I'm sure it would mean the world to him and his family.
      You can read more about how we met Hisham in this article:
      Our plan
      My coworkers and student decided to do something to help with the need we saw in the Rahma camp.
      The $2,500 raised will be usd to pay for Hisham's surgery from trusted medical professionals. The other $250 is in anticpation of transportation costs for Hisham and his family, fees for any extra hospital stay, and perhaps lodging for some of his family members during the surgery. We anticpate they will have to travel out of the rural area where the camp is located for this surgery.
      While we are raising money, we plan to reach out to local medical professionals and the Syrian American Medical Society to help us connect with the right doctor and facility and to consult on the best way to carry out the transaction.
      Also, we plan to document the use of the money and provide updates in a transparent manner. We hope to show you a photo of a smiling Hisham post-surgery upon the funding and completion of this project!`,
      _id: "2423fads3"
    },
    {
      title: "Help Hisham get Eye Surgery",
      img: "https://d2g8igdw686xgo.cloudfront.net/20263486_1494346840.984.jpg",
      desc: `Hisham is a sweet Syrian boy whose family fled their home country. They now live in a tent in the Rahma refugee camp in the Beqaa valley in Lebanon.
      I am currently working in Lebanon as a coding instructor. Recently, I visited Rahma with a few friends. We met Hisham's family there. They pleaded for us to help them.
      Hisham’s father explained that during the war, there was some kind of shock that hit Hisham, they are not exactly sure when. It caused his eyes to become crossed. Now he sees double of everything. I am sure this plays into why Hisham shyly looked toward the ground as we approached and greeted him and kept his distance from the crowds of children playing rambunctiously.
      Hisham's father told us they had a doctor look at his situation before and were told it could be fixed by an operation. This operation would cost $2,500. A hefty sum for those trying to recover from fleeing their country. We told his father that we would do what we could. And here we are, making good on our offer to help by asking you to help.
      There has been so much grief and pain for this family and others who have fled the war in Syria. Fixing this boy's vision can change his life and repair at least that part of it.
      There is a vast, vast ocean of need for Syrian refugee families. It may seem like it makes only a tiny difference in ocean of need to help this boy, but I'm sure it would mean the world to him and his family.
      You can read more about how we met Hisham in this article:
      Our plan
      My coworkers and student decided to do something to help with the need we saw in the Rahma camp.
      The $2,500 raised will be usd to pay for Hisham's surgery from trusted medical professionals. The other $250 is in anticpation of transportation costs for Hisham and his family, fees for any extra hospital stay, and perhaps lodging for some of his family members during the surgery. We anticpate they will have to travel out of the rural area where the camp is located for this surgery.
      While we are raising money, we plan to reach out to local medical professionals and the Syrian American Medical Society to help us connect with the right doctor and facility and to consult on the best way to carry out the transaction.
      Also, we plan to document the use of the money and provide updates in a transparent manner. We hope to show you a photo of a smiling Hisham post-surgery upon the funding and completion of this project!`,
      _id: "2423fads3"
    },
    {
      title: "Help Hisham get Eye Surgery",
      img: "https://d2g8igdw686xgo.cloudfront.net/20263486_1494346840.984.jpg",
      desc: `Hisham is a sweet Syrian boy whose family fled their home country. They now live in a tent in the Rahma refugee camp in the Beqaa valley in Lebanon.
      I am currently working in Lebanon as a coding instructor. Recently, I visited Rahma with a few friends. We met Hisham's family there. They pleaded for us to help them.
      Hisham’s father explained that during the war, there was some kind of shock that hit Hisham, they are not exactly sure when. It caused his eyes to become crossed. Now he sees double of everything. I am sure this plays into why Hisham shyly looked toward the ground as we approached and greeted him and kept his distance from the crowds of children playing rambunctiously.
      Hisham's father told us they had a doctor look at his situation before and were told it could be fixed by an operation. This operation would cost $2,500. A hefty sum for those trying to recover from fleeing their country. We told his father that we would do what we could. And here we are, making good on our offer to help by asking you to help.
      There has been so much grief and pain for this family and others who have fled the war in Syria. Fixing this boy's vision can change his life and repair at least that part of it.
      There is a vast, vast ocean of need for Syrian refugee families. It may seem like it makes only a tiny difference in ocean of need to help this boy, but I'm sure it would mean the world to him and his family.
      You can read more about how we met Hisham in this article:
      Our plan
      My coworkers and student decided to do something to help with the need we saw in the Rahma camp.
      The $2,500 raised will be usd to pay for Hisham's surgery from trusted medical professionals. The other $250 is in anticpation of transportation costs for Hisham and his family, fees for any extra hospital stay, and perhaps lodging for some of his family members during the surgery. We anticpate they will have to travel out of the rural area where the camp is located for this surgery.
      While we are raising money, we plan to reach out to local medical professionals and the Syrian American Medical Society to help us connect with the right doctor and facility and to consult on the best way to carry out the transaction.
      Also, we plan to document the use of the money and provide updates in a transparent manner. We hope to show you a photo of a smiling Hisham post-surgery upon the funding and completion of this project!`,
      _id: "2423fads3"
    },
    {
      title: "Help Hisham get Eye Surgery",
      img: "https://d2g8igdw686xgo.cloudfront.net/20263486_1494346840.984.jpg",
      desc: `Hisham is a sweet Syrian boy whose family fled their home country. They now live in a tent in the Rahma refugee camp in the Beqaa valley in Lebanon.
      I am currently working in Lebanon as a coding instructor. Recently, I visited Rahma with a few friends. We met Hisham's family there. They pleaded for us to help them.
      Hisham’s father explained that during the war, there was some kind of shock that hit Hisham, they are not exactly sure when. It caused his eyes to become crossed. Now he sees double of everything. I am sure this plays into why Hisham shyly looked toward the ground as we approached and greeted him and kept his distance from the crowds of children playing rambunctiously.
      Hisham's father told us they had a doctor look at his situation before and were told it could be fixed by an operation. This operation would cost $2,500. A hefty sum for those trying to recover from fleeing their country. We told his father that we would do what we could. And here we are, making good on our offer to help by asking you to help.
      There has been so much grief and pain for this family and others who have fled the war in Syria. Fixing this boy's vision can change his life and repair at least that part of it.
      There is a vast, vast ocean of need for Syrian refugee families. It may seem like it makes only a tiny difference in ocean of need to help this boy, but I'm sure it would mean the world to him and his family.
      You can read more about how we met Hisham in this article:
      Our plan
      My coworkers and student decided to do something to help with the need we saw in the Rahma camp.
      The $2,500 raised will be usd to pay for Hisham's surgery from trusted medical professionals. The other $250 is in anticpation of transportation costs for Hisham and his family, fees for any extra hospital stay, and perhaps lodging for some of his family members during the surgery. We anticpate they will have to travel out of the rural area where the camp is located for this surgery.
      While we are raising money, we plan to reach out to local medical professionals and the Syrian American Medical Society to help us connect with the right doctor and facility and to consult on the best way to carry out the transaction.
      Also, we plan to document the use of the money and provide updates in a transparent manner. We hope to show you a photo of a smiling Hisham post-surgery upon the funding and completion of this project!`,
      _id: "2423fads3"
    },
    {
      title: "Help Hisham get Eye Surgery",
      img: "https://d2g8igdw686xgo.cloudfront.net/20263486_1494346840.984.jpg",
      desc: `Hisham is a sweet Syrian boy whose family fled their home country. They now live in a tent in the Rahma refugee camp in the Beqaa valley in Lebanon.
      I am currently working in Lebanon as a coding instructor. Recently, I visited Rahma with a few friends. We met Hisham's family there. They pleaded for us to help them.
      Hisham’s father explained that during the war, there was some kind of shock that hit Hisham, they are not exactly sure when. It caused his eyes to become crossed. Now he sees double of everything. I am sure this plays into why Hisham shyly looked toward the ground as we approached and greeted him and kept his distance from the crowds of children playing rambunctiously.
      Hisham's father told us they had a doctor look at his situation before and were told it could be fixed by an operation. This operation would cost $2,500. A hefty sum for those trying to recover from fleeing their country. We told his father that we would do what we could. And here we are, making good on our offer to help by asking you to help.
      There has been so much grief and pain for this family and others who have fled the war in Syria. Fixing this boy's vision can change his life and repair at least that part of it.
      There is a vast, vast ocean of need for Syrian refugee families. It may seem like it makes only a tiny difference in ocean of need to help this boy, but I'm sure it would mean the world to him and his family.
      You can read more about how we met Hisham in this article:
      Our plan
      My coworkers and student decided to do something to help with the need we saw in the Rahma camp.
      The $2,500 raised will be usd to pay for Hisham's surgery from trusted medical professionals. The other $250 is in anticpation of transportation costs for Hisham and his family, fees for any extra hospital stay, and perhaps lodging for some of his family members during the surgery. We anticpate they will have to travel out of the rural area where the camp is located for this surgery.
      While we are raising money, we plan to reach out to local medical professionals and the Syrian American Medical Society to help us connect with the right doctor and facility and to consult on the best way to carry out the transaction.
      Also, we plan to document the use of the money and provide updates in a transparent manner. We hope to show you a photo of a smiling Hisham post-surgery upon the funding and completion of this project!`,
      _id: "2423fads3"
    },
  ];
  $scope.excerpt = function(str) {
    var words = str.split(" ");
    if (words.length >= 50) {
      return words.slice(0, 50).join(" ")+"...";
    } else {
      return words.join(" ");
    }
  }
});
