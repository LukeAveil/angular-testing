angularTesting.controller('ToDoController', [function() {
  var self = this;

  self.todos = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

  self.addTodo = function(todoText) {
    self.todos.push({text: todoText, completed: false});
  };
}]);
