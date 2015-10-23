var app = angular.module('SPA', ['ngRoute']);
app.controller('HomeController', function ($scope, $routeParams) {

    $scope.persons = [
        {id: 1, name: "Jens", age: 18}
        , {id: 2, name: "Peter", age: 23}
        , {id: 3, name: "Hanne", age: 23}
    ];
    
    if(angular.isDefined($routeParams.index)) {
        var i = $routeParams.index;
        $scope.person = $scope.persons[i];
    }
});


app.config(function ($routeProvider) {
    $routeProvider
            .when('/home', {
                templateUrl: "views/home.html",
                controller: "HomeController"
            })
            .when('/details/:index', {
                templateUrl: "views/details.html",
                controller: "HomeController"
            })
            .otherwise({
                redirectTo: "/home"
            })
})