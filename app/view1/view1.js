'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', View1Ctrl]);

	function View1Ctrl($scope) {
		$scope.text="";	
			
			$scope.drawText= function($event){

			var c=document.getElementById("myCanvas");
			
				var ctx = c.getContext("2d");
						ctx.beginPath();
						ctx.arc($event.offsetX,$event.offsetY+15, 30, 0, Math.PI*2,true); 
						ctx.closePath();
						ctx.fillStyle="pink";
						ctx.fill();
						ctx.font = "30px Arial";
						ctx.textBaseline="top";
						ctx.textAlign="center";
						ctx.fillStyle="black";
						ctx.fillText($scope.text.substring(0,1),$event.offsetX,$event.offsetY);
						$scope.text = $scope.text.slice(1);
						ctx.restore();
		}
			
}





