describe("app", function() {

  it("has displays a todo", function() {
    browser.get('/');
    var todo = $$('#todo');
    expect(browser.getTitle()).toEqual("Angular TDD");
  });

});
