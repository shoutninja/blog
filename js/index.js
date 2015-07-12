var app = angular.module('app', ['app']);

app.controller('HomeCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    var ref = new Firebase('https://eakjb-shout-ninja2.firebaseio.com/projects');
    $scope.data = $firebaseArray(ref);
}]);