(function() {

  var template = '/assets/templates/';
  // Path for Github pages project
  if (window.location.href.indexOf('angular') != -1) {
    template += '/angular-todo-app' + template;
  }

  var app = angular.module('directives', []);

  app.directive('projects', function() {
    return {
      restrict: 'E',
      templateUrl: template + 'projects.html'
    };
  });

  app.directive('tasks', function() {
    return {
      restrict: 'E',
      templateUrl: template + 'tasks.html'
    };
  });
})();