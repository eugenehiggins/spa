var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	
	.when ('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

	.when ('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})

});

myApp.service('nameService', function(){

	// capture this, because inside the `namelength` method `this` will be ambiguous
	var self = this;
	
	// create a property 
	this.name = 'Gene';
	
	// method which calculates the length of `name`
	this.namelength = function() {
		return self.name.length;
	}
});

// for a controller to use a service you must inject it, in this case `nameService`
myApp.controller('mainController', ['$scope','$log','nameService', function($scope, $log, nameService) {

	// the part of the HTML which is controlled by this controller, which in this case is main.html, has 
	// an input element that binds itself to this `$scope.name` property by using the directive `ng-model="name"`
	// this is a one way binding
	$scope.name = nameService.name;

	// To make it two way it needs to be watched
	$scope.$watch('name', function(){
		//update the nameservice to reflect what was typed into the input field
		nameService.name = $scope.name;
	});

	$log.log(nameService.name);
	$log.log(nameService.namelength());
}])

myApp.controller('secondController', ['$scope','$log', '$routeParams','nameService', function($scope, $log, $routeParams, nameService) {
	$scope.name = nameService.name;

	$scope.num = $routeParams.num || 1;
}])