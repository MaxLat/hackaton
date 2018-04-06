angular.module("app").controller("getListe", function($scope,Precision) {

    var user = Precision.query(function(){

        $scope.Liste = user

    });

     $scope.removeEleve = function(item){
        console.log('je suis dans removeEleve');
        console.log(item._id);
        item.$delete();

        var user = Precision.query(function(){

        $scope.Liste = user

    });

        
    }


    //seconde methode 
  /* $http.get("/liste").then(function(response) {
        console.log(response.data)
        $scope.Liste = response.data

    });*/
    
});

angular.module("app").controller('getPrecision',  function($scope, $stateParams,Precision) {
  
    $scope.eleve = Precision.get({id: $stateParams.id})

    $scope.updateEleve = function(eleve){
        console.log($scope.eleve);
        eleve.$update();
    }
   


});

angular.module("app").controller('Ajouter',  function($scope, $stateParams,Precision,$location) {
  

    $scope.Ajouter = function(eleve){
       Precision.save(eleve);
        $location.path('/');
    }
   


});
