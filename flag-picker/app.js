// this should be compiled by a bundler (i.e. webpack)

class FlagPicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {continents: [{}]};

		const options = {};
		fetch('./continents.json', options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((continents) => {
			console.log(continents);
			this.setState({continents});
		})
		.catch((error) => {
			console.log(error);
		});
	}

	fuzzySearch(filter, row) {
		const word = String(row[filter.id]).toLowerCase();
		const searchTerm = filter.value.toLowerCase();
		return word.includes(searchTerm);
	}

	render() {
		return (
			<div>test</div>
		);
	}
}

class ContinentPicker extends React.Component {
	render() {
  	return <h1>Hello</h1>;
  }
}

const mountPoint = document.querySelector('#flag-picker');
ReactDOM.render(
	<ContinentPicker />,
	mountPoint
);
