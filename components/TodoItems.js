import React from 'react'

function TodoItems(props) {
  const todoItems = props.todos.map((todo) => (<li>{todo.todo}</li>))
  
  return(
    <ul>
      {todoItems}
    </ul>
  )
}

export default TodoItems