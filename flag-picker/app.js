// this should be compiled by a bundler (i.e. webpack)

const flagPickerStyle = {
	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'no-wrap',
	justifyContent: 'space-evenly',
}

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
			<div style={flagPickerStyle}>
				<ContinentPicker continents={this.state.continents} />
				<CountriesPicker />
				<FlagsView />
			</div>
		);
	}
}

class ContinentPicker extends React.Component {
	render() {
		const continents = [1,2,3];

  	return (
  		<div>
				<h1>choose a continent</h1>
	  		<Select />
  		</div>
  	);
  }
}

class CountriesPicker extends React.Component {
	render() {
  	return <h1>choose countries</h1>;
  }
}

class FlagsView extends React.Component {
	render() {
  	return <h1>see the flags</h1>;
  }
}

const mountPoint = document.querySelector('#flag-picker');
ReactDOM.render(
	<FlagPicker />,
	mountPoint
);
