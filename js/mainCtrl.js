(function(){

    //here we call the same module from app.js
     var app = angular.module('todoApp');


    //main controller
    var myCtrl = function($scope){
      $scope.input = 'vesko';
    };

    //registration of this controller
    app.controller('myCtrl', myCtrl);

}());