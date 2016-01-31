var app = angular.module('myApp',['ngRoute']);

app.constant("creen", "Links to go");

app.config(['$routeProvider',function($routeProvider){
	var currentView = $routeProvider;

	currentView
		.when('/moduleA',{
			templateUrl: 'modelA.html',
			controller: 'modelAController',
			controllerAs: 'ctrl'
		})
		.when('/moduleB',{
			templateUrl: 'modelB.html',
			controller: 'modelBController',
			controllerAs: 'ctrl'
		})
		.when('/moduleC',{
			templateUrl: 'modelC.html',
			controller: 'modelCController',
			controllerAs: 'ctrl'
		}) 
		.otherwise({
			redirectTo: "/"
		})
}]);

app.controller('modelCController',['$http','factoryTest',function($http,factoryTest,creen){
	var vm = this;
	vm.view = 3;

	vm.oldName = factoryTest.getName();
	vm.newName = factoryTest.setName(creen + ' fede view 3');
}]);

app.controller('modelBController',['serviceTest',function(serviceTest){
	var vm = this;
	vm.view = 2;

	vm.oldName = serviceTest.getName();
	vm.newName = serviceTest.setName('fede view 2')

}]);

app.controller('modelAController',function(){
	var vm = this;
	vm.view = 1;
});


app.factory('factoryTest',function(){
	var factory = {};
	factory.name = '';

	factory.getName = function(){
		return factory.name;
	}	

	factory.setName = function(newName){
		factory.name = newName;
	}

	return factory;
});

app.service('serviceTest',function(){

	var name = '';

	this.setName = function(newName){
		this.name = newName;
	}
	
	this.getName = function(){
		return this.name;
	}

});