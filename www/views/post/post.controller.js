'use strict';
app.controller('postCtrl', ['data', '$scope', '$stateParams', function(data, $scope, $stateParams) {
	data.getPost($stateParams.id)
			.then(function(d){
				$scope.post = d.data;
				console.log(d);
			})
}]);