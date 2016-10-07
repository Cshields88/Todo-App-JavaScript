//Todo V.6
//Requirements
// -- .toggleAll: If everything's true, make everything false
// -- .toggleAll: Otherwise, make everything true.

var todoList = {
  todos: [],  //empty array to push in new value of todoText.
  displayTodos: function(){
  	
  	if(this.todos.length === 0){
  		console.log("Your Todo List Is Empty");
  	}
  	else{
  		for(var i = 0; i < this.todos.length; i++){
  			console.log(this.todos[i].todoText);

  			if(this.todos[i].completed === true){
  				console.log("(x)" + this.todos[i].todoText);
  			}
  			else{
  				console.log("( )" + this.todos[i].todoText);
  			}
  		}
  	}
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
  },

  toggleAll: function(){
    var completedTodos = 0;
    var totalTodos = this.todos.length;

    for (var i=0; i < totalTodos; i++){
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if(completedTodos === totalTodos){
      for(var i=0; i < totalTodos; i++){
        this.todos[i].completed = false;
      } else{
       for(var i=0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
  }

};


