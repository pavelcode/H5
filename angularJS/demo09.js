var app = angular.module('myApp', []);
	app.controller('siteCtrl', function($scope, $http) {
	  $http.get("http.json").success(function (response) {
	  		$scope.names = response.sites;
	  });
});