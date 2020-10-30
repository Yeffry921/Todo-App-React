import React from 'react';

class AddTodo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      todo: '',
      completed: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
    
    this.props.onAddTodos(this.state)
	}

	handleChange(event) {
		this.setState({
			todo: event.target.value
    });
    
	}

	render() {
		return (
      <div>
        <h1>Todo App</h1>
			  <form onSubmit={this.handleSubmit}>
				  <input type="text" placeholder="Enter Todo" onChange={this.handleChange} value={this.state.todo}/>
				  <button type="submit">Add Todo</button>
			  </form>
      </div>
      
		);
	}
}

export default AddTodo;
