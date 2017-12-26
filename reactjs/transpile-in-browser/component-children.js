function ParetComponent(props) {
	return (<div>{props.message}{props.children}</div>);
}

function ChildComponent(props) {
	return (<h3>{props.message}</h3>);
}

const mountPoint = document.querySelector('#mount-point');

const parentProps = {message: 'Hello Korea!'};
const childProps = {message: "I'm here to eat all your foodz!"};
ReactDOM.render(
	<ParetComponent {...parentProps}>
		<ChildComponent {...childProps}/>
	</ParetComponent>,
	mountPoint
);
