(function(){


     var app = angular.module('todoApp');

    //main controller
    var myCtrl = function($scope, $cookies){
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
          }
        };

        //function for making and pushing object to array
        $scope.pushToArray    = function(){
           var obj = {task: $scope.todo, done: false};
           $scope.arrayObj.push(obj);
           $scope.pushToCookie()
        };

        //push array of objects to cookie
        $scope.pushToCookie  = function(){
           var cook = $cookies.putObject($scope.cookieName, $scope.arrayObj);
           console.log(cook);
        }



    };

    //registration of this controller
    app.controller('myCtrl',  ['$cookies', myCtrl]);

}());