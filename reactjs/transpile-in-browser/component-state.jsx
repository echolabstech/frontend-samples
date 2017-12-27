class LightningDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			backgroundColor: '#000',
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
					<CounterDisplay />
					<span>Lightning Strikes</span>
					<span>WORLDWIDE!</span>
				</div>
		);
	}
}

class CounterDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		}

		this.style = {
			color: 'teal',
			fontSize: '2em',
		}
	}

	componentDidMount = () => {
		setInterval(this.incrementCounter, 1000);
	}

	incrementCounter = () => {
		this.setState({counter: this.state.counter + 100});
	}

	render = () => {
		return (<p><span style={this.style}>{this.state.counter}</span></p>);
	}
}

const mountPoint = document.querySelector('#mount-point');

ReactDOM.render(
	<LightningDisplay />,
	mountPoint
);
