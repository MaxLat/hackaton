angular.module("app").controller("setUser", function($scope,userFactory) {
    var user = userFactory.query(function(){
        console.log(user);
    });
    $scope.userData = user;
});


angular.module("app").controller("addUser",  function($scope, userFactory, $location) {
  console.log('test addUser');
    $scope.addUser = function(user){
      console.log(user);
       userFactory.save(user);
        $location.path('/');
    }
});

angular.module("app").controller("loginctrl",  function($scope, userFactory, $location) {
  console.log('test loginctrl');
    $scope.loginctrl = function(user){
      console.log(user);
       userFactory.save(user);
        $location.path('/');
    }
});
