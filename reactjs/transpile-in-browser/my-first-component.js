function MyFirstComponent(props) {
	return (<div>{props.message}</div>);
}

const mountPoint = document.querySelector('#mount-point');

const props = {message: 'Hello Korea!'};
ReactDOM.render(
	<div>
		<MyFirstComponent {...props} />
		<MyFirstComponent message='Hello America!' />
	</div>,
	mountPoint
);
