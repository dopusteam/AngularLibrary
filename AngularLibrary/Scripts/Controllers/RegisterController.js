var RegisterController = function ($scope, $location, RegistrationFactory) {
    $scope.registerForm = {
        emailAddress: "",
        password: "",
        cofnirmPassword: ""
    };

    $scope.register = function () {
        var result = RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.cofnirmPassword);
        result.then(function (result) {
            if (result.success) {
                $location.path("/routeOne");
            } else {
                $scope.registerForm.registrationFailure = true;
            }
        });
    };
}

RegisterController.$inject = ["$scope", "$location", "RegistrationFactory"];