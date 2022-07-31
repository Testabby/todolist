import React from 'react'

export const Todoitem=({todo, onDelete}) => {
  // export const Todoitem=(props) => {
  return (
    <div>
      <hr/>
      <h4>{todo.title}</h4>
      {/* <h4>{props.todo.title}</h4> */}
      <p>{todo.desc}</p>
      <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      {/*onClick={props.onDelete} */}
      <hr/>
    </div>
  )
}
