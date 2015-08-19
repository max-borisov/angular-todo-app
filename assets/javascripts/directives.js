(function() {

  var app = angular.module('directives', []);

  app.directive('projects', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/templates/projects.html'
    };
  });

  app.directive('tasks', function() {
    return {
      restrict: 'E',
      templateUrl: '/assets/templates/tasks.html'
    };
  });

})();