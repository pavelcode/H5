angular.module("myApp",[]).controller("myCtrl",["$scope",function(a){
	  	a.price = 5;
	  	a.count = 3;
	  	a.totalPrice = function(){
	  	 	return a.price*a.count;
	     }
}]);