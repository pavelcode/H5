angular.module("myApp",[]).controller("myCtrl",function($scope){
	            //简单数组数据
				$scope.companys = ["baidu","alibaba","tencent"];
				//数组对象数据
				$scope.sites = [
				    {site : "Google", url : "http://www.google.com"},
				    {site : "Runoob", url : "http://www.runoob.com"},
				    {site : "Taobao", url : "http://www.taobao.com"}
                 ];
                 //对象数据
                 $scope.sites2 = {
				    site01 : "Google",
				    site02 : "Runoob",
				    site03 : "Taobao"
				};
				//对象包含对象数据
				$scope.cars = {
				car01 : {brand : "Ford", model : "Mustang", color : "red"},
				car02 : {brand : "Fiat", model : "500", color : "white"},
				car03 : {brand : "Volvo", model : "XC90", color : "black"}
				}
});