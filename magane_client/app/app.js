var app = angular.module('authenticationApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'views/login.html',
            controller: 'login'
        })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'views/login.html',
                controller: 'login'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'views/signup.html',
                controller: 'signup'
            })
            .when('/', {
                title: 'Start',
                templateUrl: 'views/start.html',
                controller: 'start',
                role: '0'
            })
            .otherwise({
                redirectTo: '/start'
            });
    }]);