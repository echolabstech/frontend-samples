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
				}
			]
		};
	}

	render() {
		const columns = [
			{
				Header: 'Product ID',
				accessor: 'ID'
			},
			{
				Header: 'Description',
				accessor: 'Description'
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
				accessor: 'Department'
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
