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
			continents: [],
			show_countries: false,
			countries: [],
			show_flags: false,
			flags: [],
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
		const continent = this.state.continents.find((continent) => {
			return continent.continent === continentOption.value;
		});
		this.setState({show_countries: true, countries: continent.countries});
	}

	selectCountry(countryOption) {
		console.log('selected ', countryOption);
		const country = this.state.countries.find((country) => {
			return country.name === countryOption.value;
		});
		let flags = this.state.flags.find((flag) => {
			return flag.name === country.name;
		});
		if (!flags) {
			flags = [];
			flags.push(country);
		}
		flags = [...flags, ...this.state.flags];
		this.setState({show_flags: true, flags});
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
						selectContinent={(continentOption) => this.selectContinent(continentOption)} />

					<CountriesPicker
						countries={this.state.countries}
						selectCountry={(countryOption) => this.selectCountry(countryOption)}
						show_countries={this.state.show_countries} />

					<FlagsView
						flags={this.state.flags}
						selectFlag={(flagOption) => this.selectFlag(flagOption)}
						show_flag={this.state.show_flag} />
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
			const countries = this.props.countries.map((country)=> {
				return {value: country.name, label: country.name};
			});
			const selectCountry = this.props.selectCountry;
	  	return (
	  		<div>
					<h1>choose countries</h1>
		  		<Select 
		  			options={countries}
		  			onChange={selectCountry} />
	  		</div>
  		);
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
