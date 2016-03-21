var thePresidentsApp = angular.module('ThePresidentsApp');

thePresidentsApp.controller('PresidentsController', ['$scope', '$http', function($scope, $http){
  $scope.presidents = [];

  $scope.newPresident = {};
  $scope.addPresident = addPresident;
  $scope.deletePresident = deletePresident;

  getPresidents();

  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        $scope.presidents = response.data.presidents;
    });
  }

  function addPresident(){
    $http
      .post('http://localhost:3000/presidents', $scope.newPresident)
      .then(function(response){
        getPresidents();
    });
    $scope.newPresident = {};
  }

  function deletePresident(president){
    $http
      .delete("http://localhost:3000/presidents/" + president._id)
      .then(function(response){
        var index = $scope.presidents.indexOf(president);
        $scope.presidents.splice(index, 1);
      });
  }
}]);
