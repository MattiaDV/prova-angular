var app = angular.module("myApp", ['ngSanitize']);
app.controller("myController", function($scope) {
    $scope.message = "Hello World!";
});

app.controller("myControllerDue", function($scope) {
    $scope.welcome = "Ciao bro";
})

app.controller("myControllerTre", function($scope) {
    $scope.card = "<div class = 'aaa'>prova</div>";
})