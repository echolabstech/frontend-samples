function LetterComponent(props) {
	const letterStyling = {
		fontFamily: 'monospace',
		fontSize: '6em',
		backgroundColor: props.bgcolor || 'green',
		padding: '0.5em',
	};
	return (<span style={letterStyling}>{props.children}</span>);
}

const mountPoint = document.querySelector('#mount-point');
const letterContainer = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	marginTop: '5em',
};

ReactDOM.render(
	<div style={letterContainer}>
		<LetterComponent bgcolor='red'>A</LetterComponent>
		<LetterComponent bgcolor='lightblue'>B</LetterComponent>
		<LetterComponent bgcolor='orange'>C</LetterComponent>
		<LetterComponent>D</LetterComponent>
	</div>,
	mountPoint
);
