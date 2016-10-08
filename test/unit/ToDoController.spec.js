describe('ToDoController', function() {
  beforeEach(module('angularTesting'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with a todo', function() {
    expect(ctrl.todo).toEqual("ToDo1");
  });
});
