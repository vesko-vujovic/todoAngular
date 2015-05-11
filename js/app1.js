/**
 * Here we define modules for this app
 */
var todoApp = angular.module('todoApp', ['ngCookies']);

//configiration for todoApp
todoApp.config(['$httpProvider', function($httpProvider){

    //angular has removed this type  of header so laravel can't see if this is an ajax request
    // in order to work we modified this header so now to laravel it looks like ajax request
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
}]);




//shared service for controllers
todoApp.service('sharedService', function($http){


});