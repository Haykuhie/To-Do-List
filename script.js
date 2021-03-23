//selectors//
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.btn');
const todoList= document.querySelector('.todo-list');
const todoListComplete= document.querySelector('.todo-list-complete');

//Event Listeners//
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions//
function addTodo(event){

  if (todoInput.value==''){
    alert('You should write something!!!');
    event.preventDefault();
    return
  }
  

  //Prevent autoreload
  event.preventDefault();


  //create Div with todo list item, delete button and checked bitton//
  const todoDiv= document.createElement('div');
  todoDiv.classList.add("todo");
  const newTodo= document.createElement('li');
  newTodo.innerText=todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild( newTodo);

  //Checked Button//
  const completedButton=document.createElement('button');
  completedButton.innerHTML= '<i class="far fa-check-square"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild( completedButton);

  //Delete Button//
  const trashButton=document.createElement('button');
  trashButton.innerHTML= '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild( trashButton);

  //Edit Button//
  const editButton=document.createElement('button');
  editButton.innerHTML= '<i class="far fa-edit"></i>';
  editButton.classList.add("edit-btn");
  todoDiv.appendChild( editButton);


  //Append to UL//
  todoList.appendChild(todoDiv);

  // clear todoInput value
  todoInput.value='';  
}


function deleteCheck(e){
  const item = e.target;
  if (item.classList[0] === 'trash-btn'){
    const toDo=item.parentElement;
    toDo.remove()
  }
  if (item.classList[0] === 'complete-btn'){
    const toDo=item.parentElement;
    toDo.classList.toggle('completed');
    todoListComplete.appendChild(toDo);    
  }

  if (item.classList[0] === 'edit-btn'){
    const toDo=item.parentElement;
    todoInput.value=toDo.textContent;
    todoButton.textContent= 'Save';  
       if (item.textContent= 'Save'){
           const toDo=item.parentElement;
           toDo.remove()
           toDo.textContent=todoInput.value;        
    } 
  }
}


