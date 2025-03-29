var app = angular.module("myApp", ['ngSanitize']);
// Stringa
app.controller("myController", function($scope) {
    $scope.message = "Hello World!";
});

// Stringa
app.controller("myControllerDue", function($scope) {
    $scope.welcome = "Ciao bro";
})

// Div
app.controller("myControllerTre", function($scope) {
    $scope.card = "<div class = 'aaa'>prova</div>";
})