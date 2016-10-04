// Todo V2 - Functions

// Requirements:
// --It should have a function to display todos
// --It should have a function to add todos
// --It should have a function to change todos
// --It should have a function to delete todos


var todos = ['item 1', 'item 2', 'item3'];

// Displaying Todos

function displayTodos(){
  console.log('My Todos: ', todos);
}

// Adding Todos

function addTodos (){
  todos.push('new todo');
  displayTodos();
}

// Changing Todos

function changeTodo(pos, newValue){ 
  todos[pos] = newValue;
  displayTodos();
}
// 1st parameter tells what postion, 2nd tells what new value
changeTodo(0, 'changed Todo');

//Deleting Todos

function removeTodo(pos){
  todos.splice(pos, 1);
  displayTodos();
}

