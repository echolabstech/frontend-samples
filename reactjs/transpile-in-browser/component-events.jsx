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
				<CounterDisplay onClickListener={listener => {this.childOnClickListener = listener;}} />
				<button type="submit" onClick={(event) => {this.childOnClickListener(event);}}>+</button>
			</div>
		);
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

	componentDidMount() {
		this.props.onClickListener(this.incrementCounter);
		console.log('componentDidMount');
	}

	shouldComponentUpdate(newProps, newState) {
		console.log('ShouldComponentUpdate');

		if (newState.counter === this.state.counter) {
			return false;
		}
		return true;
	}

	incrementCounter = (event) => {
		let counter = this.state.counter;

		if (event.shiftKey) {
			counter += 10;
		} else {
			counter += 1;
		}

		this.setState(prevState => ({counter}));
	}

	render = () => {
		return (<p><span style={this.style}>{this.state.counter}</span></p>);
	}
}

const mountPoint = document.querySelector('#mount-point');

ReactDOM.render(
	<RootDisplay />,
	mountPoint
);
