import React from 'react';

import AddTodo from './AddTodo';

class Todos extends React.Component {
	constructor(props) {
    super(props)

    this.state = {
      todos: [
        {
          todo: 'Todo sample 1',
          completed: false,
          id: 1
        },
        {
          todo: 'Todo sample 2',
          completed: false,
          id: 1
        },
        {
          todo: 'Todo sample 3',
          completed: false,
          id: 1
        },
        {
          todo: 'Todo sample 4',
          completed: false,
          id: 1
        },
        {
          todo: 'Todo sample 5',
          completed: false,
          id: 1
        },
      ]
    }
  }
  
  render() {
    return (
      <AddTodo/>
      
    )
  }
}
