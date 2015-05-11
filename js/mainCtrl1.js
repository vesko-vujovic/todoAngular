var app = angular.module('todoApp');

app.controller('myCtrl', ['$scope', '$cookies', '$cookieStore', 'databaseService', function($scope, $cookies, $cookieStore, databaseService ){
    /*
     * Important!
     * When you start app you must define your scope variables to avoid undefined values
     * These are global variables
     */
    $scope.todo          = '';
    $scope.state         = false;
    $scope.arrayObj      = [];
    $scope.cookieName    = 'bild';
    $scope.storageMode   = 'db';



    $scope.isEmpty   = function(){
        if($scope.todo === null || $scope.todo === "")
        {

        }
        else
        {

        }
    };

    //function for making and pushing object to array
    $scope.pushToArray    = function(){
        var obj = {task: $scope.todo, done: false};
        $scope.arrayObj.push(obj);
        $scope.pushToCookie();
    };

    //push array of objects to cookie
    $scope.pushToCookie            = function(){
        var cook = $cookieStore.put($scope.cookieName, $scope.arrayObj);
        $scope.displayDataFromCookie();
    };

    //function for displayDatafrom cookie
    $scope.displayDataFromCookie   = function(){
         $scope.arrayObj = $cookieStore.get($scope.cookieName);

    };

    /*
      * function that will delete an item from the list
      * @param index - this is index of clicked array
     */
    $scope.deleteItemFromList      = function(index){
         $scope.arrayObj.splice(index, 1);
         $cookieStore.put($scope.cookieName, $scope.arrayObj);
    };

    $scope.deleteCompleted         = function()
    {
        /**
         * This is loop in loop, it deletes array of items in array of objects
         * It finds objects value, then compares it with other object, and if we have
         * match the item is deletes, else the loop continues
         */
        var oldList = $scope.arrayObj;
        $scope.arrayObj = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.arrayObj.push(x);
        });

        $cookieStore.put($scope.cookieName,$scope.arrayObj);

    };


    if($cookieStore.get($scope.cookieName) !== undefined )
    {
        $scope.displayDataFromCookie();
    }



}]);