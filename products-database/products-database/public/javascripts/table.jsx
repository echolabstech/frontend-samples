class TransactionTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {products: [{}]};

		fetch('/api/products')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((products) => {
			console.log(products);
			this.setState({products});
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
				Header: 'Product ID',
				accessor: 'ID',
				filterMethod: this.fuzzySearch,
				filterable: true
			},
			{
				Header: 'Description',
				accessor: 'Description',
				filterMethod: this.fuzzySearch,
				filterable: true
			},
			{
				Header: 'Last Sale',
				accessor: 'lastSold'
			},
			{
				Header: 'ShelfLife',
				accessor: 'ShelfLife'
			},
			{
				Header: 'Department',
				accessor: 'Department',
				filterMethod: this.fuzzySearch,
				filterable: true
			},
			{
				Header: 'Price',
				accessor: 'Price'
			},
			{
				Header: 'Unit',
				accessor: 'Unit'
			},
			{
				Header: 'xFor',
				accessor: 'xFor'
			},
			{
				Header: 'Cost',
				accessor: 'Cost'
			}
		];

		return (
			<div>
				<ReactTable
					data={this.state.products}
					columns={columns}
					defaultPageSize={10}
			  	/>
			</div>
		);
	}
}

const mountPoint = document.querySelector('#products-database');
ReactDOM.render(
	<TransactionTable />,
	mountPoint
);
