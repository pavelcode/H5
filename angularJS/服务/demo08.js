angular.module("myApp",[]).controller("myCtrl",function($scope,$location,$http,$timeout,$interval){ //$location需要自己定义
	  //$location服务，获得本地地址
//	   $scope.myurl = $location.absUrl();  
	  
	  //$http服务
//	  $http.get("hello.html").then(function(response){
//	  	$scope.mydata = response.data;
//	  });

     //$timeout服务
//   $timeout(function(){
//   	 $scope.timeout = "时间到了";
//   },2000);

     //$interval服务
//   $interval(function(){
//   	 $scope.time = new Date().toLocaleTimeString();
//   },1000);

});

//自定义服务 平方
var app = angular.module("myApp",[]);
app.service("myservice",function(){
     	 this.square = function(num){
     	 	return num*num;
     	 }
});
//使用自定义服务
//app.controller("myCtrl",function($scope,myservice){
//	$scope.myvalue = myservice.square(20);
//});

//过滤器中使用服务
app.filter("myfilter",["myservice",function(myservice){
	return function(x){
		return myservice.square(x);
	}
}]);

//数组中使用过滤服务
app.controller("myCtrl",function($scope){
	$scope.arr = [10,20,30]
});
     