describe('ToDoController', function() {
  beforeEach(module('angularTesting'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several todos', function() {
    var todos = [
      {text: "ToDo1", completed: true},
      {text: "ToDo2", completed: false}
    ];

    expect(ctrl.todos).toEqual(todos);
  });

  it('can add a todo', function() {
    ctrl.addTodo('NewToDo');

    var todo = {text: "NewToDo", completed: false};

    expect(ctrl.todos.pop()).toEqual(todo);
  });

  it('can remove the last todo', function() {
    var initialCount = ctrl.todos.length;

    ctrl.removeTodo();

    expect(ctrl.todos.length).toEqual(initialCount - 1);
  });
});
