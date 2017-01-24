angular.module('todoApp', [])
  .controller('todoController', function($scope) {

    $scope.todo_list = [
      {your_name: 'Dominik'},
      {your_name: 'Alex'},
      {your_name: 'Mme Sam SUCK'}
    ];

    $scope.add_todo = function() {
      $scope.todo_list.push({your_name: $scope.your_name});
    };

  });
