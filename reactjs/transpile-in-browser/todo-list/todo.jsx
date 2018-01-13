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
					<input ref={this.setTextInput} />
					<button type="submit">add</button>
				</form>
				<ul>
					{todos}
				</ul>
			</div>
		);
	}

	addTodo(event) {
		const todo = {text: this.textInput.value, key: Date.now()};
		const updateTodo = (prevState, props)=>({todos: [...this.state.todos, todo]});
		const focusAndSelectText = () => {this.textInput.focus(); this.textInput.value = '';};
		this.setState(updateTodo, focusAndSelectText);
		event.preventDefault();
	}

	setTextInput = (textInput) => {
		this.textInput = textInput;
	}
}

const mountpoint = document.querySelector('#mount-point')
ReactDOM.render(
	<TodoApp />,
	mountpoint
);
