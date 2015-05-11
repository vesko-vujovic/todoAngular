/**
 * Here we define modules for this app
 */
var todoApp = angular.module('todoApp', ['ngCookies']);

//configiration for todoApp
todoApp.config(['$httpProvider', function($httpProvider){

    //make request visible for laravel
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}]);




//new services to be used trough app
todoApp.service('databaseService', function($http){

});