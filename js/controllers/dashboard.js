(function(){
var app = angular.module('dashboard',[]);

app.directive('dashboardHome', function(){
	return{
		restrict: 'E',
		templateUrl: '/views/dashboard/index.html',
		controller: function(){}
	}
});

})();
