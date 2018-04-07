angular.module("app")
  .factory('pokemonFactory', ['$resource',
    function($resource){
      return $resource('api/pokedex/:id', {id:'@_id'}, { 'update': {method: 'PUT'} });

    }]
 );
