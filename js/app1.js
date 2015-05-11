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



   //function to post data to database
    /**
     *
     * @param input         - is value from text input
     * @param eventHandler  - is function that will return data from service to controller
     */

    this.addToDatabase            = function(input, eventHandler){
        $http.post('/todoback/public/ajax/post/data', {input: input} ).success(function(data) {
            eventHandler(data);
        });
    };

   //function to list data from database
    this.listFromDatabase         = function(){

    };

   // function to delete one item from database
    this.deleteOneItem            = function(){

    };

   //function that will delete selected items
    this.deleteSelectedItems      = function(){

    };

   //function that will display data
    this.displayData              = function(data){

    };


   //some function that will display data after page refreshes
    this.displayDataAfterRefresh  = function(){

    }
});