class RootDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: undefined,
		}

		this.style = {
			container: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			input: {
				width: '150px',
			}
		}
	}

	render() {
		return (
			<div style={this.style.container}>
				<ColorDisplay color={this.state.color}/>
				<div>
					<input style={this.style.input} type="text" ref={this.setTextInput} />
					<button type="submit" onClick={this.onClickListener.bind(this)}>Go</button>
				</div>
			</div>
		);
	}

	setTextInput = (textInput) => {
		this.textInput = textInput;
	}

	onClickListener(event) {
		const changeColor = prevState => ({color: this.textInput.value});
		const focusAndSelectText = () => {this.textInput.focus(); this.textInput.select();};
		this.setState(changeColor, focusAndSelectText);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!nextState.color || (this.state.color === nextState.color)) {
			return false;
		}
		return true;
	}
}

class ColorDisplay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: undefined,
		}

		this.style = {
			backgroundColor: 'rgba(0, 0, 0, 0.0)',

			height: '250px',
			width: '250px',

			margin: '100px auto 0px auto',
			border: '1px solid black',
			borderRadius: '5px',
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps');
		this.setState(prevState => ({color: nextProps.color}));
	}

	render() {
		const style = {...this.style, backgroundColor: this.state.color};
		return (
			<div style={style}></div>
		);
	}
}

const mountPoint = document.querySelector('#mount-point');

ReactDOM.render(
	<RootDisplay />,
	mountPoint
);
