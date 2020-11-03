import React from 'react';

import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

class Todos extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {
      todos: []
    }
    this.addTodos = this.addTodos.bind(this)
    this.onChange = this.onChange.bind(this)
	}

  addTodos(todo) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(todo)
      }
    }) 
  }
  // When input checkbox is clicked I want to flip
  //todos.completed status
  onChange(id) {
    console.log(id)
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
    })
  }
	render() {
    console.log(this.state)
		return (
			<React.Fragment>
				<AddTodo onAddTodos={this.addTodos}/>
        <TodoItems todos={this.state.todos} onHandleChange={this.onChange}/>
			</React.Fragment>
		);
	}
}

export default Todos;
