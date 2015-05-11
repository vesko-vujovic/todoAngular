/**
 * Here we define modules for this app
 */
var todoApp = angular.module('todoApp', ['ngCookies']);


//new services to be used trough app
todoApp.service('databaseService', function($http){

   //global variables for this class

   //
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

   //function to post data to database
    this.addToDatabase            = function(input){

        $http.post('/todoback/public/ajax/post/data', 'input=' + input ).success(function(data) {
            console.log(data);
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
   //some function that will display data after page refreshes
    this.displayDataAfterRefresh  = function(){

    }
});