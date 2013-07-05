

function TitleCtrl($scope) {
  $scope.name = 'World';
}

function CompanyCtrl($scope) {
  $scope.name = 'Worldssssss';
}

function LoginCtrl($scope) {
  $scope.name = 'Worldss';
  $scope.user = {name: '', password: ''};

	$scope.go = function(login) {
		alert($scope.user.name);
		return false
	  };
	

}

