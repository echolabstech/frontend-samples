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

		this.state = {
			isClicked: false,
			shiftKey: false,
			mountChild: true,
		}
	}

	render() {
		const counterDisplay = this.state.mountChild ? (<CounterDisplay isClicked={this.state.isClicked}
								shiftKey={this.state.shiftKey}
								unmount={this.unmount.bind(this)} />) : null;
		return (
			<div style={this.style}>
				{counterDisplay}
				<button type="submit" onClick={this.onClickListener.bind(this)}>+</button>
			</div>
		);
	}

	unmount(childComponent) {
		this.setState(prevState => ({mountChild: false}), () => {
			ReactDOM.unmountComponentAtNode(document.querySelector('#mount-point'));
		});
	}

	onClickListener(event) {
		const shiftKey = event.shiftKey;
		this.setState(prevState => ({isClicked: true, shiftKey}));
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

		this.unmount = props.unmount;
	}

	componentWillMount() {
		console.log('componentWillMount');
	}

	/**
	* Wasn't able to get this to call when conditionally
	* removing child components from render. Even when calling
	* unmountComponentAtNode() on the top-level mount-point.
	*/
	componentWillUnMount() {
		console.log('componentWillUnMount');
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('ShouldComponentUpdate');

		if (nextState.counter >= 5) {
			this.unmount(this);
			return false;
		}
		return true;
	}

	render() {
		console.log('render');
		return (<p><span style={this.style}>{this.state.counter}</span></p>);
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate(oldProps, oldState) {
		console.log('componentDidUpdate');
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
		if (nextProps.isClicked) {
			this.incrementCounter(nextProps.shiftKey);
		}
	}

	incrementCounter = (shiftKey) => {
		console.log('setState');
		let counter = this.state.counter;

		if (shiftKey) {
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
