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
		this.state = {
			show_continents: false,
			continents: [{}],
			show_countries: false,
			countries: [{}],
			show_flags: false,
			flags: [{}],
		};

		const options = {};
		fetch('./continents.json', options)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((continents) => {
			console.log(continents);
			this.setState({show_continents: true, continents});
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

	selectContinent(continentOption) {
		console.log('selected ', continentOption);
	}

	selectCountry(countryOption) {
		console.log('selected ', countryOption);
	}

	selectFlag(flagOption) {
		console.log('selected ', flagOption);
	}

	render() {
		if (this.state.show_continents) {
			return (
				<div style={flagPickerStyle}>
					<ContinentPicker
						continents={this.state.continents}
						selectContinent={this.selectContinent} />

					<CountriesPicker
						countries={this.state.countries}
						selectCountry={this.selectCountry} />

					<FlagsView
						flags={this.state.flags}
						selectFlag={this.selectFlag} />
				</div>
			);
		} else {
			return <h1>Loading json...</h1>
		}
	}
}

class ContinentPicker extends React.Component {
	render() {
		const continents = this.props.continents.map((continent)=> {
			return {value: continent.continent, label: continent.continent};
		});
		const selectContinent = this.props.selectContinent;
  	return (
  		<div>
				<h1>choose a continent</h1>
	  		<Select 
	  			options={continents}
	  			onChange={selectContinent} />
  		</div>
  	);
  }
}

class CountriesPicker extends React.Component {
	render() {
		if (this.props.show_countries) {
	  	return <h1>choose countries</h1>;
		} else {
			return <div />;
		}
  }
}

class FlagsView extends React.Component {
	render() {
		if (this.props.show_flags) {
	  	return <h1>see the flags</h1>;
		} else {
			return <div />;
		}
  }
}

const mountPoint = document.querySelector('#flag-picker');
ReactDOM.render(
	<FlagPicker />,
	mountPoint
);
