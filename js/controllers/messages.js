(function(){
var app = angular.module('globalMessages', []);

app.directive('globalMessages', function(){
	return {
		restrict: 'E',
		templateUrl: config.urlprefix+'/views/elements/globalmessages.html',
		controller: 'messageController',
		controllerAs: 'messageCtrl',
	}
});

app.controller('messageController', ['$scope', 'globalmessage', function($scope, globalmessage){
	$scope.messages = globalmessage.getMessages();

	$scope.removeMessage = function(id){
		globalmessage.removeMessage(id);
	}

}]);

app.service("globalmessage", function(){
		this.msgs = [];
	this.setMessage = function (msg, type) {
		this.msgs.push({'message': msg, 'type': type});
	};
	
	this.getMessages = function(){
		return this.msgs;
	}

	this.removeMessage = function(id){
		this.msgs.splice(id, 1);
	}

});



})();

