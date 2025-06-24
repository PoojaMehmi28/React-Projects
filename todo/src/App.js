import Header from './components/Header.js';
import { useState } from 'react';
import Footer from './components/Footer.js';
// import Main from './components/Main.js';
import './App.css';
import './css/header.css';
import './css/footer.css';
import Todos from './components/Todos.js';
import AddTodos from './components/AddTodos.js';

function App() {
  const onDelete=(todo)=>{
    // console.log('Todo item is deleted!!', todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo = (title,desc)=>{
    console.log("Adding new Todo",title,desc);
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
   
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);  
  }
  const [ todos, setTodos ] = useState( [{
      sno:1,  
      title: "Go to the market",
      desc: "jasdhjasgdjasdhas"
    },
    {
      sno:2,
      title: "Go to the Home",
      desc: "jasdhjasgdjasdhas"
    },
    {
      sno:3,
      title: "Go to the Mall",
      desc: "jasdhjasgdjasdhas"
    }
  ])
  return (
    <div className="App">
      <Header title="Todo List" searchBar={false} />
      {/* <Main /> */}
      <AddTodos addTodo={addTodo}/>
      <Todos todo={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
