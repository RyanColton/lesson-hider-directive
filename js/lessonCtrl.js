angular.module('directivePractice').controller('directiveController', function($scope, lessonService){

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = 'Two-way data binding!'

  $scope.announceDay = function(lesson, day){
    if(day === undefined){alert('That Lesson is not on the Schedule')}
    else{
    alert(lesson + ' is active on ' + day + '.');
  }
  }

})
