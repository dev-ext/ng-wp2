'use strict';
app.controller('homeCtrl', ['data', '$scope', function(data, $scope) {
	data.getPosts()
			.then(function(d){
				$scope.posts = d.data;
				console.log(d);
			});
}])