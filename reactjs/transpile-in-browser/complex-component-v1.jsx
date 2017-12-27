class Card extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',

			margin: '2em 0em 0em 2em',
			backgroundColor: props.bgcolor,
			fontFamily: 'sans-serif',
			fontWeight: 'bold',

			boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
			WebkitBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',
			MozBoxShadow: '0px 0px 5px 1px rgba(0,0,0,0.75)',

			width: '200px',
			height: '250px',
		};
	}

	render() {
		return (
			<div style={this.style}>
				<Label>{this.props.bgcolor}</Label>
			</div>
		);
	}
}

class Label extends React.Component {
	constructor(props) {
		super(props);

		this.style = {
			backgroundColor: '#FFF',
			padding: '1em',
		};
	}

	render() {
		return (
			<div style={this.style}>
				{this.props.children}
			</div>
		);
	}
}

const mountPoint = document.querySelector('#mount-point');

ReactDOM.render(
	<Card bgcolor='#FF0000' />,
	mountPoint
);
