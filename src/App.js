
import './App.css';
import Header from "./components/Header";
import Todos from "./components/todos";
import Footer from "./components/footer";
import {Addtodo} from "./components/Addtodo";
import React, { useState } from 'react';

function App() {

const onDelete = (todo)=>{
console.log("I am on Delete of todo", todo);
setTodos (todos.filter((e)=>{
  return e!==todo;
}))
}

const [todos,setTodos] = useState([
      {
        sno: 1,
        title: "Go to Market",
        desc: "you need to go to market to get done"
      },
      {
        sno: 2,
        title: "Go to Shop",
        desc: "you need to go to Shop to get done"
      },
      {
        sno:3 ,
        title: "Go to mall",
        desc: "you need to go to mall to get done"
      },
    ]);

return(
  <>
  <Header title="To Do App" searchbar={false}></Header>
  
  <Todos todos={todos} onDelete={onDelete}/>

  <Addtodo></Addtodo>

  <Footer></Footer>
  </>
  );
}
export default App;
