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
		this.state = {is_ready: false, continents: [{}]};

		const options = {};
		fetch('./continents.json', options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((continents) => {
			console.log(continents);
			this.setState({is_ready: true, continents});
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
		if (this.state.is_ready) {
			return (
				<div style={flagPickerStyle}>
					<ContinentPicker continents={this.state.continents} />
					<CountriesPicker />
					<FlagsView />
				</div>
			);
		} else {
			return <h1>Loading...</h1>
		}
	}
}

class ContinentPicker extends React.Component {
	render() {
		const options = this.props.continents.map((continent)=> {
			return {value: continent.continent, label: continent.continent};
		});
  	return (
  		<div>
				<h1>choose a continent</h1>
	  		<Select options={options} />
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
