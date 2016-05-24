angular
	.module('Scheduling')
	.service('navigationService',[ '$http', function($http){

		return {
			getCompany: function(company_id){
				return $http.get('/api/users/' + company_id +'/company')
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);