	'use strict';
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
	    .state('post', {
	      url: "/post/:id",
	      controller: 'postCtrl',
	      templateUrl: "views/post/post.html"
	    })

	    
	});
