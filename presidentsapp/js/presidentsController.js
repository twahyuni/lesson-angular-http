// var thePresidentsApp = angular.module('ThePresidentsApp');

app.controller('PresidentsController', ['$scope', '$http', function($scope, $http){
  $scope.presidents = [];

  // function getPresidents() {
  //   $http
  //     .get('http://localhost:3000/presidents')
  //     .then(function (response) {
  //       $scope.presidents = response.data.presidents;
  //     })
  // }

  $scope.api = {
    getPresidents: function() {
      $http({
        url: 'http://localhost:3000/presidents',
        method: 'GET'
      }).then(function(response){
        $scope.presidents = response.data.presidents;
      })
    },
    createPresident: function() {
      $http({
        url: 'http://localhost:3000/presidents',
        method: 'POST',
        data: $scope.newPresident
      }).then(function(resp){
        $scope.presidents.push(resp.data.president);
        $scope.newPresident = ''
      }, function(resp) {
        console.log(resp);
      })
    },
    viewPresident: function(index, president) {
      $scope.updatePresident = angular.copy(president);
      $scope.editIndex = index;
    },
    updatePresident: function(index, president) {
      id = $scope.updatePresident._id;
      $http({
        url: 'http://localhost:3000/presidents/' + id,
        method: 'PATCH',
        data: $scope.updatePresident
      }).then(function(resp){
        console.log(resp)
        $scope.presidents[$scope.editIndex] = resp.data.president
        $scope.updatePresident = ""
      }, function(resp) {
        console.log(resp);
      })
    },
    removePresident: function(index, president) {
      id = president._id;
      $http({
        url: 'http://localhost:3000/presidents/' + id,
        method: 'DELETE'
      }).then(function(resp){
        $scope.presidents.splice(index,1);
      }, function(resp) {
        console.log(resp);
      })
    },
    init: function() {
      this.getPresidents();
    }
  }

  $scope.api.init();
}]);
