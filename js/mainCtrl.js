(function(){

    //here we call the same module from app.js
     var app = angular.module('todoApp');

    //main controller
    var myCtrl = function($scope){
        //global variables
        $scope.todo;
        $scope.state;

        $scope.isEmpty   = function(){

          if(typeof $scope.todo === "undefined" || $scope.todo === null && $scope.todo === "")
          {
             $scope.state = true;
          }
          else
          {
             $scope.state = false;
          }
        };


    };

    //registration of this controller
    app.controller('myCtrl', myCtrl);

}());