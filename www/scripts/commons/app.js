/*
Main script
*/
'use strict';
var app = angular.module('app', ['ui.router'])
	.run([function(){
		console.log('app is running.')
	}]);

	app.config(function($stateProvider, $urlRouterProvider) {
	  
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/home");
	  //commons
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      controller: 'homeCtrl',
	      templateUrl: "views/home/home.html"
	    })

	    
	});
