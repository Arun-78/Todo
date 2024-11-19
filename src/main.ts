import './style.css'

interface Todo{
  title:string;
  iscompleted:boolean;
  readonly id:string;
}
const todos:Todo[] =[];

const todoscontainer = document.querySelector(".todocontainer") as HTMLDivElement;


const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm =document.getElementById("myform")as HTMLFormElement;

myForm.onsubmit=(e:SubmitEvent)=>{
  e.preventDefault();

  const todo:Todo={
    title: todoInput.value,
    iscompleted:false,
    id:String(Math.random() *1000),

  };
todos.push(todo);
todoInput.value ="";
renderTodo(todos)
};

const generateTodoItem=(title:string, iscompleted:boolean,id:string)=>{
  const todo:HTMLDivElement=document.createElement("div");
todo.className="todo";

//creating a checkbox.
const checkbox:HTMLInputElement = document.createElement("input");
checkbox.setAttribute("type" , "checkbox");
checkbox.className="iscompleted";
checkbox.checked=iscompleted;
checkbox.onchange=()=>{
  //todarray
  todos.find(item=>{
    if(item.id===id)
      item.iscompleted = checkbox.checked;
  });
  paragraph.className =checkbox.checked?"textcut" : "";
  
};

//creating p for title

const paragraph :HTMLParagraphElement = document.createElement("p");
paragraph.innerText=title;
paragraph.className =iscompleted ?"textcut" : "";

// create delete button
const btn:HTMLButtonElement= document.createElement("button");
btn.innerText="X";
btn.className="deletebtn";
btn.onclick= ()=>{
  deleteTodo(id)
};

// apppending all to todo item

todo.append(checkbox,paragraph,btn);

todoscontainer.append(todo);


};

const deleteTodo=(id:string)=>{

  const idx = todos.findIndex((item)=> item.id === id);
  todos.splice(idx,1);
  renderTodo(todos);
};

const renderTodo =(todos:Todo[])=>{
  todoscontainer.innerText="";
  todos.forEach(item=>{
    generateTodoItem(item.title, item.iscompleted, item.id);
  })

};