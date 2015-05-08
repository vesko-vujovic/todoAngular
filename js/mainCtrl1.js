var app = angular.module('todoApp');

app.controller('myCtrl', ['$scope', '$cookies', '$cookieStore', function($scope, $cookies, $cookieStore){
    /*
     * Important!
     * When you start app you must define your scope variables to avoid undefined values
     * These are global variables
     */
    $scope.todo          = '';
    $scope.state         = false;
    $scope.arrayObj      = [];
    $scope.cookieName    = 'bild';



    $scope.isEmpty   = function(){
        if($scope.todo === null || $scope.todo === "")
        {
            $scope.state = true;
        }
        else
        {
            $scope.state = false;
            $scope.pushToArray();
            $scope.todo  = '';
        }
    };

    //function for making and pushing object to array
    $scope.pushToArray    = function(){
        var obj = {task: $scope.todo, done: false};
        $scope.arrayObj.push(obj);
        $scope.pushToCookie()
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

    //function that will delete an item from the list
    $scope.deleteItemFromList      = function(index){
         $scope.arrayObj.splice(index, 1);
         $cookieStore.put($scope.cookieName, $scope.arrayObj);

    };

    $scope.displayDataFromCookie();

}]);