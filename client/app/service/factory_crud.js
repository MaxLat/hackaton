angular.module("app")
  .factory('Precision', ['$resource',
    function($resource){
      return $resource('/liste/:id', {id:'@_id'}, { 'update': {method: 'PUT'} });

    }]
 );

