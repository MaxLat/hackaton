angular.module("app").controller("getPokedex", function($scope,pokemonFactory, searchFactory, $stateParams) {

    var user = pokemonFactory.query(function(){


        console.log(user);

    });

    $scope.pokedexData = user;

//crtl search bar
    $scope.search = function(resultat){
      var test= searchFactory.query({name: $scope.resultat});
      console.log("en dessous scope test");
      $scope.test = test;
      console.log($scope.test);
    }
});


angular.module("app").controller('getPokedexDetail',  function($scope, $stateParams,pokemonFactory) {

    $scope.infoPokemon = pokemonFactory.get({id: $stateParams.id})
console.log($scope.infoPokemon);

});



// angular.module("app").controller('searchPokemon',  function($scope, $stateParams,searchFactory) {
// console.log('test search');
//     $scope.search = function(resultat){
//       $scope.resultat = searchFactory.get({name: $stateParams.name})
// console.log($scope.resultat);
// }
// });
