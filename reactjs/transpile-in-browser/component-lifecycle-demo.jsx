class RootDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			backgroundColor: '#ffa500',
			color: '#FFF',
			fontSize: '3em',
			fontFamily: 'sans-serif',

			height: '500px',
			width: '500px',

			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',

			margin: '100px auto 0px auto',
			border: '1px solid black',
			borderRadius: '5px',
		}
	}

	render() {
		return (
			<div style={this.style}>
				<CounterDisplay ref={this.setChildRef} />
				<button type="submit" onClick={this.onClickListener}>+</button>
			</div>
		);
	}

	setChildRef = child => {
		this.child = child;
	}

	onClickListener = event => {
		this.child.onClickListener(event);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}
}

class CounterDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			color: 'teal',
			fontSize: '2em',
		}

		this.state = {
			counter: 0,
		}
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	componentWillUnMount() {
		console.log('componentWillUnMount');
	}

	componentWillUpdate(newProps, newState) {
		console.log('componentWillUpdate with newProps: ', newProps, 'and newState: ', newState);
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('ShouldComponentUpdate');

		// if (newState.counter >= 2) {
		// 	// need to call ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this)) from top-level container
		// 	return false;
		// }
		return true;
	}

	render = () => {
		return (<p><span style={this.style}>{this.state.counter}</span></p>);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(oldProps, oldState) {
		console.log('componentDidUpdate');
	}

	componentDidUnMount() {
		console.log('componentDidUnMount');
	}

	componentWillReceiveProps(newProps) {
		console.log('componentWillReceiveProps');
	}

	onClickListener(event) {
		this.incrementCounter(event);
	}

	incrementCounter = (event) => {
		console.log('incrementing counter');
		let counter = this.state.counter;

		if (event.shiftKey) {
			counter += 10;
		} else {
			counter += 1;
		}

		this.setState(prevState => ({counter}));
	}
}

const mountPoint = document.querySelector('#mount-point');

ReactDOM.render(
	<RootDisplay />,
	mountPoint
);
