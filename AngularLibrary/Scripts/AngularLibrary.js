var AngularLibrary = angular.module("AngularLibrary", ["ui.router", "ui.bootstrap"]);

AngularLibrary.controller("LandingPageController", LandingPageController);
AngularLibrary.controller("LoginController", LoginController);
AngularLibrary.controller("RegisterController", RegisterController);

AngularLibrary.factory("AuthHttpResponseInterceptor", AuthHttpResponseInterceptor);
AngularLibrary.factory("LoginFactory", LoginFactory);
AngularLibrary.factory("RegistrationFactory", RegistrationFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix("!").html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('stateOne',
        {
            url: '/stateOne?donuts',
            views: {
                'containerOne': {
                    templateUrl: '/Home/One'
                },
                'containerTwo': {
                    templateUrl: function(params) { return '/Home/Two?donuts=' + params.donuts; }
                },
                'nestedView@stateOne': {
                    templateUrl: '/Home/Four'
                }
            }
        })
        .state('stateTwo',
        {
            url: '/stateTwo',
            views: {
                'containerOne': {
                    templateUrl: '/Home/One'
                },
                'containerTwo': {
                    templateUrl: '/Home/Three'
                }
            }
        })
        .state('stateThree',
        {
            url: '/stateThree?donuts',
            views: {
                'containerOne': {
                    templateUrl: function(params) { return '/Home/Two?donuts=' + params.donuts; }
                },
                'containerTwo': {
                    templateUrl: '/Home/Three'
                }
            }
        })
        .state('loginRegister',
        {
            url: '/loginRegister?returnUrl',
            views: {
                'containerOne': {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                },
                'containerTwo': {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        });


    $httpProvider.interceptors.push("AuthHttpResponseInterceptor");
}

configFunction.$inject = ["$stateProvider", "$httpProvider", "$locationProvider"];

AngularLibrary.config(configFunction);