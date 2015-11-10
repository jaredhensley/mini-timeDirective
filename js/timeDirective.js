angular.module('timeApp').directive('timeDirective', function ($interval) {

  return {
    restrict: 'E',
    template: '<div> The current time is {{time | date: "medium"}} </div>',
    link: function ($scope, element, attrs) {
      var newTime = new Date();
      $scope.time = newTime.toString();
      $interval(function () {
        $scope.time = new Date().toString();
      }, 1000);
    }

  }


});