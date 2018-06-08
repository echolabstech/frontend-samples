// this should be compiled by a bundler (i.e. webpack)

const ReactTable = window.ReactTable.default
class TransactionTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {properties: [{}]};

		fetch('/api/properties')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((properties) => {
			console.log(properties);
			this.setState({properties});
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
		const columns = [
			{
				Header: 'ID',
				accessor: 'ID',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: 'LotArea',
				accessor: 'LotArea',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: 'YearBuilt',
				accessor: 'YearBuilt',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: '1stFlrSF',
				accessor: '1stFlrSF',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: '2ndFlrSF',
				accessor: '2ndFlrSF',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: 'FullBath',
				accessor: 'FullBath',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: 'BedroomAbvGr',
				accessor: 'BedroomAbvGr',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
			{
				Header: 'TotRmsAbvGrd',
				accessor: 'TotRmsAbvGrd',
				filterMethod: this.fuzzySearch,
				filterable: true,
			},
		];

		return (
			<div>
				<ReactTable
					data={this.state.properties}
					columns={columns}
					defaultPageSize={10}
			  	/>
			</div>
		);
	}
}

const mountPoint = document.querySelector('#properties-database');
ReactDOM.render(
	<TransactionTable />,
	mountPoint
);
