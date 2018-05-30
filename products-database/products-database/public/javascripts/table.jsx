class TransactionTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					ID: 753542,
					Description: 'banana',
					lastSold: '9/5/2017',
					ShelfLife: '4d',
					Department: 'Produce',
					Price: '$2.99',
					Unit: 'lb',
					xFor: 1,
					Cost: '$0.44'
				},
				{
					ID: 321654,
					Description: 'apples',
					lastSold: '9/6/2017',
					ShelfLife: '7d',
					Department: 'Produce',
					Price: '$1.49',
					Unit: 'lb',
					xFor: 1,
					Cost: '$0.20'
				},
				{
					ID :95175,
					Description: 'Strawberry',
					lastSold: '9/7/2017',
					ShelfLife: '3d',
					Department: 'Produce',
					Price: '$2.49',
					Unit: 'lb',
					xFor: 1,
					Cost: '$0.10'
				}
			]
		};
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
