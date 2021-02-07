//selectors//
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.btn');
const todoList= document.querySelector('.todo-list');


//Event Listeners//
todoButton.addEventListener('click', addTodo)


//Functions//
function addTodo(event){
  //create Div with todo list item, delete button and checked bitton//
  const todoDiv= document.createElement('div');
  todoDiv.classList.add('todo');
  const newTodo= document.createElement('li');
  newTodo.innerText='hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild( newTodo);

  //Checked Button//
  const completedButton=document.createElement('button');
  completedButton.innerHTML= '<i class="far fa-check-square"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild( completedButton);

  //Delete Button//
  const trashButton=document.createElement('button');
  trashButton.innerHTML= '<i class="fas fa-trash"></i>';
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild( trashButton);


  //Append to UL//
  todoList.appendChild(todoDiv);

}
