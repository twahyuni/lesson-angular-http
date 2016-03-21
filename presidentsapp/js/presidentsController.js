var thePresidentsApp = angular.module('ThePresidentsApp');

thePresidentsApp.controller('PresidentsController', ['$scope', '$http', function($scope, $http){
  $scope.presidents = [];

  $scope.president = {};
  $scope.createMode = true;
  $scope.newPresident = newPresident;
  $scope.editPresident = editPresident;
  $scope.deletePresident = deletePresident;
  $scope.savePresident = savePresident;

  getPresidents();

  function getPresidents(){
    $http
      .get('http://localhost:3000/presidents')
      .then(function(response){
        $scope.presidents = response.data.presidents;
      }
    );
  }

  function newPresident() {
    $scope.president = {};
    $scope.createMode = true;
  }

  function createPresident(){
    $http
      .post('http://localhost:3000/presidents', $scope.president)
      .then(function(response){
        getPresidents();
      }
    );
    $scope.president = {};
  }

  function deletePresident(president){
    $http
      .delete("http://localhost:3000/presidents/" + president._id)
      .then(function(response){
        var index = $scope.presidents.indexOf(president);
        $scope.presidents.splice(index, 1);
      }
    );
  }

  function editPresident(president) {
    $scope.president = {
      _id: president._id,
      name: president.name,
      start: president.start,
      end: president.end
    };
    $scope.createMode = false;
  }

  function updatePresident() {
    $http
      .patch('http://localhost:3000/presidents/' + $scope.president._id, $scope.president)
      .then(function(response){
        getPresidents();
      }
    );
    $scope.president = {};
  }

  function savePresident() {
    if ($scope.createMode) {
      createPresident();
    } else {
      updatePresident();
    }
  }
}]);
