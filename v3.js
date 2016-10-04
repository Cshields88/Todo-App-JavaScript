// Todo V3 - Objects

// Requirements:
// --It should store the todos array on an object
// --It should have a displayTodos method
// --It should have a addTodo method
// --It should have a changeTodo method
// --It should have a deleteTodo method


var todoList = {
  todos: ['Item 1', 'Item 2', 'Item 3'],
  displayTodos: function(){
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(){
    this.todos.push('new todo');
    this.displayTodos();
  },
  changeTodo: function(pos, newValue){
    this.todos[pos] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(pos){
    this.todos.splice(pos, 0);
    this.displayTodos();
  }
};

