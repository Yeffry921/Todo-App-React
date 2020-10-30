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
	}

  addTodos(todo) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.concat(todo)
      }
    })
    
  }
	render() {
		return (
			<React.Fragment>
				<AddTodo onAddTodos={this.addTodos}/>
        <TodoItems todos={this.state.todos}/>
			</React.Fragment>
		);
	}
}

export default Todos;
