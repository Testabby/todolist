import React from 'react'

import {Todoitem} from './todoitems';

export default function Todos(props) {
  return (
    <div className="container">
      <h2 className="text-center">Todos List</h2>
      {props.todos.map((todo)=>{
        return(
         <Todoitem todo={todo} onDelete={props.onDelete}/>
        )
      })}
     
    </div>
  )
}

Todos.defaultProps = {
  title: "Your Title Here",
  }