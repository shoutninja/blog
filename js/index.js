var app = angular.module('app', ['firebase']);

app.controller('HomeCtrl', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
    var ref = new Firebase('https://eakjb-shout-ninja2.firebaseio.com/projects');
    $scope.projects = $firebaseArray(ref);
}]);