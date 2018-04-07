angular.module("app")
  .factory('userFactory', ['$resource',
    function($resource){
      return $resource('/user/:id', {id:'@_id'}, { 'update': {method: 'PUT'} });

    }]
 );
