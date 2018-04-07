angular.module("app").config(function($stateProvider ,$urlRouterProvider,$locationProvider ) {


var Index = {
    name: 'home',
    url: '/',
    templateUrl: 'app/template/home.html',
    controller : 'getPokedex',
    // controllerAs : 'getPokedexCtrl'
  }

var search = {
    name: 'search',
    url: '/search/:name',
    templateUrl: 'app/template/search.html',
    controller : 'getPokedex',
    // controllerAs : 'getPokedexCtrl'
  }

  var shop = {
      name: 'shop',
      url: '/shop',
      templateUrl: 'app/template/shop.html'
      // controllerAs : 'getPokedexCtrl'
    }


  var Ajouter = {
    name: 'Ajouter',
    url: '/Ajouter',
    templateUrl : 'app/template/ajouter.html',
    controller : 'Ajouter'
  }

  var signUp = {
    name: 'signUp',
    url: '/signup',
    templateUrl: 'app/template/signup.html',
    controller: 'addUser'
  }

  var signIn = {
    name: 'signIn',
    url: '/signin',
    templateUrl: 'app/template/signin.html',
    controller: 'loginctrl'
  }

  var getPokedexDetail = {
    name: 'getPokedexDetail',
    url: '/:id',
    templateUrl: 'app/template/detail_card.html',
    controller : 'getPokedexDetail'
  }



  $stateProvider.state(signUp);
  $stateProvider.state(getPokedexDetail);
  $stateProvider.state(Index);
  $stateProvider.state(search);
  $stateProvider.state(Ajouter);
  $stateProvider.state(signIn);
  $stateProvider.state(shop);

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

});
