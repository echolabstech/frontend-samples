import React from "react";
import ReactDOM from "react-dom";

class TodoApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [], // [{text, key}]
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!nextState.todos[nextState.todos.length-1]) {
			return false;
		}
		return true;
	}

	render() {
		const todos = this.state.todos.map((todo)=>{return <li key={todo.key}>{todo.text}</li>});
		return (
			<div className="todo-app">
				<form className="controls" onSubmit={this.addTodo.bind(this)}>
					<input ref={(textInput) => {this.textInput = textInput;}} />
					<button type="submit">add</button>
				</form>
				<ul>
					{todos}
				</ul>
			</div>
		);
	}

	addTodo(event) {
		event.preventDefault();
		event.stopPropagation();

		const todo = {text: this.textInput.value, key: Date.now()};
		const updateTodo = (prevState, props)=>({todos: [...this.state.todos, todo]});
		const focusAndSelectText = () => {this.textInput.focus(); this.textInput.value = '';};
		this.setState(updateTodo, focusAndSelectText);
	}
}

module.exports = TodoApp;
