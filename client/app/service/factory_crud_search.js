angular.module("app")
  .factory('searchFactory', ['$resource',
    function($resource){
      return $resource('/api/search/:name', {name:'name'});
    }]
 );
