angular.module("myApp",[]).controller("myCtrl",function($scope){
	  $scope.myval = true;
	  $scope.aaa = function(){
	  	//alert("111");
	  	  $scope.myval = !$scope.myval;
	  }
});