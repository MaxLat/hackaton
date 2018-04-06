angular.module("app").config(function($stateProvider ,$urlRouterProvider ) {


var Index = {
    name: 'home',
    url: '/',
    templateUrl: 'app/template/home.html',
    controller : 'getListe'
  }

  var Ajouter = {
    name: 'Ajouter',
    url: '/Ajouter',
    templateUrl : 'app/template/ajouter.html',
    controller : 'Ajouter'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  var Precision = {
    name: 'Precision',
    url: '/Precision/:id',
    templateUrl: 'app/template/personne-precision.html',
    controller : 'getPrecision'
  }


  $urlRouterProvider.otherwise('/')  

  $stateProvider.state(aboutState);
  $stateProvider.state(Precision);
  $stateProvider.state(Index);
  $stateProvider.state(Ajouter);
  
});