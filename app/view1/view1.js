'use strict';

var app=angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

app.controller('View1Ctrl', function($scope) {
    $scope.testname= "test name";
    

    $scope.printscope=function(){
            console.log($scope);
            return "test function";
        };

    $scope.testdatabase=function(){        
            console.log($scope);
            return "test database";
        };

});
