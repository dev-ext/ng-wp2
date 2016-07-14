app.service('data', ['$http', '$q', 'appConfig', function($http, $q, appConfig){
	
	function _getPosts(query) {
		var query = query ? query : '';
		console.log(query);
		var dfd = $q.defer();
		var url = appConfig.endPoint + '/posts/'+ query;
		$http.get(url)
		.then(function(d){
			dfd.resolve(d);
		},function(d){
			dfd.reject(d);
		});
		return dfd.promise;
	} 

	return {
		getPosts: _getPosts
	};


}]);