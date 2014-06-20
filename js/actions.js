(function(){
var app = angular.module('actions',[]);

app.directive('indexAction', function(){
	return{
		restrict: 'E',
		templateUrl: '/front/admin/list.html',
		controller: function(){}
	}
});

})();
