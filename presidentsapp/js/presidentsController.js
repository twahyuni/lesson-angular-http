var thePresidentsApp = angular.module('ThePresidentsApp');

thePresidentsApp.controller('PresidentsController', ['$scope', function($scope){
  $scope.presidents = [
    {name: 'George Washington', start: 1789, end: 1797 },
    {name: 'John Adams', start: 1797, end: 1801 },
    {name: 'Thomas Jefferson', start: 1801, end: 1809 },
    {name: 'James Madison', start: 1809, end: 1817 }
  ];
}]);
