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


}])

myApp.controller('secondController', ['$scope','$log', '$routeParams','nameService', function($scope, $log, $routeParams, nameService) {

}]);

myApp.directive ('searchResult', function() {
	return {
		templateUrl: 'directives/searchresult.html',
		replace: true
	}
});