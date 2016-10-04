//Todo V.4  
//Requirements
// --todoList.addTodo should add objects
// --todoList.changeTodo should change the todoText Property
// --todoList.toggleCompleted should change the completed Property


//objects are better for holding more data.

var todoList = {
  todos: [],  //empty array to push in new value of todoText.
  displayTodos: function(){
    console.log('My Todos: ', this.todos);
  },
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(pos, todoText){
    this.todos[pos].todoText = todoText;  //grabs the todoText property and sets it to the value of todoText Parameter.
    this.displayTodos();
  },
  deleteTodo: function(pos){
    this.todos.splice(pos, 0);
    this.displayTodos();
  },
  toggleCompleted: function(pos){
    var todos = this.todos[pos]; // references specific todo
    todo.completed = !todo.completed;  //sets todo.completed to opposite
    this.displayTodos();
  }
  
};