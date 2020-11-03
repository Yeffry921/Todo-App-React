import React from 'react'


function TodoItems(props) {
  
  const todoItems = props.todos.map((todo) => {
    
    return(
      <div key={todo.id}>
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => props.onHandleChange(todo.id)}
        />
        <p>{todo.todo}</p>
      </div>
      
    )
  })
  
  return(
    <ul>
      {todoItems}
    </ul>
  )
}

export default TodoItems